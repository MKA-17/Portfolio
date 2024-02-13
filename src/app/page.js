 

import { motion } from 'framer-motion';
import Contact from '@/components/contact/contact';
import HeroSection from '@/components/HeroSection/HeroSection';
import About from '@/components/about/About';
import Projects from '@/components/Projects/Projects';
import WorkExperience from '@/components/workExperience/WorkExperience';
import AnimationProvider from '@/components/animation/AnimationProvider';
 

export default function Home() {
  return (
    <div>
      
      
{/* Hero Section */}
<HeroSection/>

  {/* About Section */}
<AnimationProvider>
  <About/>
</AnimationProvider>

{/* Work experience */}
  <AnimationProvider>

<WorkExperience/>
  </AnimationProvider>
 
  
  <AnimationProvider>
  <Projects/>

  </AnimationProvider>
  {/* Contact Section */}
  <AnimationProvider>

  <Contact/>
  </AnimationProvider>

  
   

</div>
  )
}
