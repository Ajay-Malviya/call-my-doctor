'use client'
import { useEffect, useMemo, useState } from 'react'

export default function Analytics() {
  const [logs, setLogs] = useState([])

  useEffect(() => {
    try {
      const data = localStorage.getItem('user_click_logs') || '[]'
      const parsed = JSON.parse(data)
      if (Array.isArray(parsed)) {
        setLogs(parsed)
      } else {
        setLogs([])
      }
    } catch {
      setLogs([])
    }
  }, [])

  const hasLogs = logs.length > 0

  const columns = useMemo(
    () => [
      { key: 'refId', label: 'Ref ID' },
      { key: 'timestamp', label: 'Timestamp' },
      { key: 'buttonId', label: 'Button' },
      { key: 'url', label: 'URL' },
      { key: 'deviceType', label: 'Device' },
      { key: 'platform', label: 'Platform' },
      { key: 'utm', label: 'UTM' },
      { key: 'formData', label: 'Form Data' },
    ],
    []
  )

  function formatUTM(utm) {
    if (!utm || typeof utm !== 'object') return '-'
    const entries = Object.entries(utm)
    if (!entries.length) return '-'
    return entries.map(([k, v]) => `${k}=${v}`).join('\n')
  }

  function formatFormData(formData) {
    if (!formData || typeof formData !== 'object') return '-'
    const { name = '', phone = '', email = '' } = formData
    if (!name && !phone && !email) return '-'
    return `name: ${name}\nphone: ${phone}\nemail: ${email}`
  }

  function handleRefresh() {
    try {
      const raw = localStorage.getItem('user_click_logs') || '[]'
      const parsed = JSON.parse(raw)
      setLogs(Array.isArray(parsed) ? parsed : [])
    } catch {
      setLogs([])
    }
  }

  function handleClear() {
    try {
      localStorage.removeItem('user_click_logs')
    } finally {
      setLogs([])
    }
  }

  return (
    <div className='p-6'>
      <h1 className='text-4xl font-semibold mb-4'>Analytics</h1>
      <div className='flex gap-2 mb-4'>
        <button
          onClick={handleRefresh}
          className='cursor-pointer px-3 py-2 border border-gray-200 rounded-md bg-white hover:bg-gray-50'
        >
          Refresh
        </button>
        <button
          onClick={handleClear}
          className='cursor-pointer px-3 py-2 border border-red-200 text-red-600 rounded-md bg-white hover:bg-red-50'
        >
          Clear Logs
        </button>
      </div>

      {!hasLogs ? (
        <div className='text-gray-600'>No logs found</div>
      ) : (
        <div className='overflow-auto max-h-[70vh] border border-gray-200 rounded-md'>
          <table className='w-max min-w-[800px] text-xs md:text-sm lg:text-base'>
            <thead className='text-left'>
              <tr>
                {columns.map((c) => (
                  <th
                    key={c.key}
                    className='px-2 py-2 border-b border-gray-200 font-semibold text-[10px] md:text-xs text-gray-700 whitespace-nowrap'
                  >
                    {c.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {logs.map((log, idx) => (
                <tr key={(log && log.refId) || idx} className='odd:bg-white even:bg-gray-50'>
                  <td className='px-2 py-2 border-b border-gray-100 whitespace-nowrap'>{log?.refId || '-'}</td>
                  <td className='px-2 py-2 border-b border-gray-100 whitespace-nowrap'>{log?.timestamp || '-'}</td>
                  <td className='px-2 py-2 border-b border-gray-100 whitespace-nowrap'>{log?.buttonId || '-'}</td>
                  <td className='px-2 py-2 border-b border-gray-100 max-w-[300px] break-all'>{log?.url || '-'}</td>
                  <td className='px-2 py-2 border-b border-gray-100 whitespace-nowrap'>{log?.deviceType || '-'}</td>
                  <td className='px-2 py-2 border-b border-gray-100 max-w-[500px] break-all'>{log?.platform || '-'}</td>
                  <td className='px-2 py-2 border-b border-gray-100 whitespace-pre-wrap'>{formatUTM(log?.utm)}</td>
                  <td className='px-2 py-2 border-b border-gray-100 whitespace-pre-wrap'>
                    {formatFormData(log?.formData)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
