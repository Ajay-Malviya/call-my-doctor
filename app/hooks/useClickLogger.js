'use client'
import { useSearchParams } from 'next/navigation'

export function useClickLogger() {
  const searchParams = useSearchParams()

  function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0
      const v = c === 'x' ? r : (r & 0x3) | 0x8
      return v.toString(16)
    })
  }

  function getUTMParams() {
    const utm = {}
    for (const key of ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']) {
      const value = searchParams.get(key)
      if (value) utm[key] = value
    }
    return utm
  }

  function getDeviceType() {
    if (typeof window === 'undefined') return 'unknown'
    const ua = navigator.userAgent.toLowerCase()
    if (/mobile|android|iphone|ipad|ipod|opera mini|iemobile|wpdesktop/.test(ua)) return 'mobile'
    if (/tablet/.test(ua)) return 'tablet'
    return 'desktop'
  }

  function getPlatformInfo() {
    if (typeof window === 'undefined') return 'unknown'
    return `${navigator.platform || 'unknown'} | ${navigator.userAgent}`
  }

  function getFormData() {
    try {
      const data = localStorage.getItem('callback_form_data')
      if (data) return JSON.parse(data)
    } catch {}
    return { name: '', phone: '', email: '' }
  }

  const logClick = (buttonRef, label = '') => {
    const refId = generateUUID()
    const url = typeof window !== 'undefined' ? window.location.href : ''
    const buttonId = buttonRef?.current?.id || label || 'unknown-btn'
    const utm = getUTMParams()
    const timestamp = new Date().toISOString()
    const deviceType = getDeviceType()
    const platform = getPlatformInfo()
    const formData = getFormData()

    const log = {
      refId,
      url,
      buttonId,
      utm,
      timestamp,
      deviceType,
      platform,
      formData,
    }

    try {
      const prevLogs = JSON.parse(localStorage.getItem('user_click_logs') || '[]')
      prevLogs.push(log)
      localStorage.setItem('user_click_logs', JSON.stringify(prevLogs))
    } catch {
      console.error('Error saving click log')
    }
  }

  return { logClick }
}
