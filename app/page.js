import Benefits from './(home)/Benefits'
import CallBack from './(home)/CallBack'
import Cta from './(home)/Cta'
import Faq from './(home)/Faq'
import Hero from './(home)/Hero'
import SimpleSteps from './(home)/SimpleSteps'
import Testimonials from './(home)/Testimonials'
import WhyChooseUs from './(home)/WhyChooseUs'

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyChooseUs />
      <SimpleSteps />
      <Benefits />
      <Testimonials />
      <CallBack />
      <Faq />
      <Cta />
    </main>
  )
}
