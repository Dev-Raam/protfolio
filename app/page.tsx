"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Twitter, Youtube, Mail, Phone, Globe, MapPin, Home, Sun, Moon } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"
import { SiFigma } from "react-icons/si"

export default function Portfolio() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    if (!isDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="container mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-row items-center gap-6 md:gap-8 max-w-4xl mx-auto">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Hi, I'm Ram 👋</h1>
            <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a Software Engineer, a Designer, and a big fan of open-source communities. Oh, and did I mention
              I love Data Science? 💙
            </p>
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/ram2.jpg"
              alt="Ram's profile photo"
              width={120}
              height={120}
              className="rounded-full sm:w-[150px] sm:h-[150px]"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-6 md:py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold mb-4">About</h2>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            As a passionate Software Engineer and Designer, I thrive at the intersection of technology and creativity. 
            My journey began with a curiosity for building things and a love for problem-solving, which led me to explore 
            various domains—from Designing to web technologies and data science. I enjoy contributing to open-source communities, 
            collaborating with like-minded individuals, and constantly learning new tools and frameworks. Whether it's designing 
            intuitive user interfaces or architecting scalable solutions, I strive to create meaningful impact through my work. 
            Open to new challenges and always eager to grow, I believe in the power of code to make a difference.
            </p>
        </div>
      </section>

      {/* Work Experience */}
      <section className="container mx-auto px-4 py-6 md:py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold mb-6">Work Experience</h2>
          <div className="space-y-4 md:space-y-6">
            
            {/* Personal Project */}
            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
                <Image
                  src="/dss3.png"   
                  alt="project"
                  width={48}
                  height={48}
                  className="rounded-lg object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1 sm:gap-4">
                  <div className="min-w-0">
                    <h3 className="font-semibold text-sm md:text-base">Personal Project</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">DataInsights</p>
                  </div>
                  <span className="text-xs md:text-sm text-muted-foreground flex-shrink-0">January 2025 - March 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summer Training */}
      <section className="container mx-auto px-4 py-6 md:py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold mb-6">Summer Training</h2>
          <div className="space-y-4 md:space-y-6">
            
            {/* Summer training in java */}
            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
                <Image
                  src="/lpulogo.png"   
                  alt="project"
                  width={48}
                  height={48}
                  className="rounded-lg object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1 sm:gap-4">
                  <div className="min-w-0">
                    <h3 className="font-semibold text-sm md:text-base">Lovely Professional University</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">Application Development in Java</p>
                  </div>
                  <span className="text-xs md:text-sm text-muted-foreground flex-shrink-0">June 2024 - July 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Education */}
      <section className="container mx-auto px-4 py-6 md:py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold mb-6">Education</h2>
          <div className="space-y-4 md:space-y-6">
            
            {/* Lovely Professional University */}
            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
                <Image
                  src="/lpulogo.png"
                  alt="Lovely Professional University"
                  width={48}
                  height={48}
                  className="rounded-lg object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1 sm:gap-4">
                  <div className="min-w-0">
                    <h3 className="font-semibold text-sm md:text-base">Lovely Professional University</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      BTech Computer Science (Lateral Entry) - 7.5 CGPA
                    </p>
                  </div>
                  <span className="text-xs md:text-sm text-muted-foreground flex-shrink-0">2023 - 2026</span>
                </div>
              </div>
            </div>

            {/* Ludhiana Polytechnic College */}
            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
                <Image
                  src="/ludhiana-logo.png"
                  alt="Ludhiana Polytechnic College"
                  width={48}
                  height={48}
                  className="rounded-lg object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1 sm:gap-4">
                  <div className="min-w-0">
                    <h3 className="font-semibold text-sm md:text-base">Ludhiana Polytechnic College</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">Diploma in Mechanical Engineering - 8 CGPA</p>
                  </div>
                  <span className="text-xs md:text-sm text-muted-foreground flex-shrink-0">2020 - 2023</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="container mx-auto px-4 py-6 md:py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold mb-6">Skills</h2>
          <div className="flex flex-wrap gap-1.5 md:gap-2">
            {[
              "Java",
              "TypeScript",
              "C/C++",
              "JavaScript",
              "Python",
              "SQL",
              "Tableau",
              "Power BI",
              "Nextjs",
              "Flask",
              "Figma",
              "TailwindCSS",
              "Excel",
              "UI/UX",
              "Git",
              "GitHub",
              "AWS",
              "Postman",
              "R",
              "VS Code",
              "IntelliJ",
            ].map((skill) => (
              <Badge key={skill} variant="secondary" className="px-2 py-1 text-xs md:text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <Badge variant="outline" className="mb-4 text-xl font-bold md:text-l">
              My Projects
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Check out my latest work</h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              I've worked on a variety of projects, from Data Science, UI/UX to web applications. There are too many of them!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Project Cards */}
            <Card className="overflow-hidden w-full max-w-lg">
              <div className="h-40 md:h-48 bg-teal-100 flex items-center justify-center">
                <Image
                  src="/Datainsights.png"
                  alt="Data project"
                  width={300}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardContent className="p-4 md:p-6">
                <h3 className="font-semibold text-base md:text-lg mb-2">DataInsights</h3>
                <p className="text-sm italic text-muted-foreground mb-3">
                  Built to make online shopping smarter, not harder.
                </p>
                <p className="text-xs md:text-sm text-muted-foreground mb-4 leading-relaxed">
                  While shopping online, I often found it frustrating to rely on unclear reviews and ratings to make decisions. 
                  That's why I created DataInsights—a dashboard where users can paste Amazon or Flipkart links to instantly 
                  view product details, pricing, and reviews in one place. To go further, I added an AI assistant that explains how 
                  a product can be useful, how to care for it, and even suggests better alternatives. This project was built with a 
                  purpose: to make online shopping clearer, smarter, and more personalized.
                </p>
                <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">
                    Python
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    JS
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    GitHub
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="h-8 px-3 bg-transparent" asChild>
                    <a
                      href="https://github.com/Dev-Raam/DataInsights"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="w-3 h-3" />
                      <span className="text-xs">GitHub</span>
                    </a>
                  </Button>

                  {/* Live Demo Button */}
                    <Button variant="outline" size="sm" className="h-8 px-3 bg-transparent" asChild>
                      <a
                        href="https://your-live-site.netlify.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Globe className="w-3 h-3" />
                        <span className="text-xs">Live Demo</span>
                      </a>
                    </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden w-full max-w-lg">
              <div className="h-40 md:h-48 bg-teal-100 flex items-center justify-center">
                <Image
                  src="/meesho.png"
                  alt="Ui/UX project"
                  width={300}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardContent className="p-4 md:p-6">
                <h3 className="font-semibold text-base md:text-lg mb-2">Meesho | UI/UX</h3>
                <p className="text-sm italic text-muted-foreground mb-3">
                  A Bold New Look for Meesho.
                </p>
                <p className="text-xs md:text-sm text-muted-foreground mb-4 leading-relaxed">
                  For this Meesho website redesign, I focused on creating a cleaner, more user-friendly experience. 
                  Simplified navigation and a streamlined layout make it easier for users to explore and shop. The design 
                  balances aesthetics with functionality, featuring improved mobile optimization and faster load times. Key 
                  updates include a refreshed color scheme and a more engaging product catalog layout. This redesign enhances user 
                  experience, aiming to increase engagement and conversion rates while staying true to Meesho’s brand identity.
                </p>
                <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">
                    Figma
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Prototyping 
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="h-8 px-3 bg-transparent" asChild>
                    <a
                      href="https://www.figma.com/design/MxXksXIvvL9yvdonq4tfeC/meesho-redesign?node-id=0-1&p=f&t=oHMGsZGP3C6HYCa0-0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <SiFigma className="w-3 h-3" />
                      <span className="text-xs">Figma</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden w-full max-w-lg">
              <div className="h-40 md:h-48 bg-teal-100 flex items-center justify-center">
                <Image
                  src="/uuxx.png"
                  alt="Ui/UX project"
                  width={300}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardContent className="p-4 md:p-6">
                <h3 className="font-semibold text-base md:text-lg mb-2">Zeriubi | UI/UX</h3>
                <p className="text-sm italic text-muted-foreground mb-3">
                  Designing a digital voice for small fashion brands.
                </p>
                <p className="text-xs md:text-sm text-muted-foreground mb-4 leading-relaxed">
                  Big fashion brands dominate online spaces, often leaving small businesses behind. With Zeriubi, 
                  I designed a clothing e-commerce platform in Figma to give local brands a voice. The interface 
                  supports both consumers and sellers, featuring separate sign-up flows and dashboards that help 
                  track growth. This project was more than design—it was about making fashion more accessible and 
                  helping small businesses thrive online.
                </p>
                <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">
                    Figma
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Prototyping 
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="h-8 px-3 bg-transparent" asChild>
                    <a
                      href="https://www.figma.com/design/ZprITf3BFjT9YXmSYvMGiX/cloth?node-id=0-1&p=f&t=oH7HkKQxsVYCRvBb-0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <SiFigma className="w-3 h-3" />
                      <span className="text-xs">Figma</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden w-full max-w-lg">
              <div className="h-40 md:h-48 bg-orange-100 flex items-center justify-center">
                <Image
                  src="/Airbnb.jpg"
                  alt="Airbnb"
                  width={300}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardContent className="p-4 md:p-6">
                <h3 className="font-semibold text-base md:text-lg mb-2">Airbnb Data Analysis</h3>
                <p className="text-sm italic text-muted-foreground mb-3">
                  Turning raw data into actionable insights for smarter hosting.
                </p>
                <p className="text-xs md:text-sm text-muted-foreground mb-4 leading-relaxed">
                  Airbnb hosts and travelers often rely on guesswork to make decisions. With Airbnb Data Analysis, 
                  I used R to explore the New York Airbnb dataset and uncover trends in pricing, room types, and 
                  neighborhood popularity. This project wasn't just about visualizing data—it was about turning 
                  insights into practical decisions for better hosting and smarter booking.
                </p>
                <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">
                    R
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Data Analysis
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Data Visulaization
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="h-8 px-3 bg-transparent" asChild>
                    <a
                      href="https://github.com/Dev-Raam/Airbnb"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="w-3 h-3" />
                      <span className="text-xs">GitHub</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden w-full max-w-lg">
              <div className="h-40 md:h-48 bg-teal-100 flex items-center justify-center">
                <Image
                  src="/movierecom.png"
                  alt="Data project"
                  width={300}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardContent className="p-4 md:p-6">
                <h3 className="font-semibold text-base md:text-lg mb-2">Movie Recommender</h3>
                <p className="text-sm italic text-muted-foreground mb-3">
                  Helping you discover movies you'll actually love.
                </p>
                <p className="text-xs md:text-sm text-muted-foreground mb-4 leading-relaxed">
                  While choosing a movie to watch, I often found it frustrating to scroll endlessly through reviews and 
                  ratings without knowing if I'd actually enjoy the film. That's why I created MovieRecommender—a system 
                  where users can type in a movie and instantly get personalized recommendations based on their taste. 
                  To make it smarter, I integrated a model that not only suggests similar movies but also provides details 
                  like genre, ratings, and plot summaries. This project was built with a purpose: to make discovering movies 
                  easier, more enjoyable, and perfectly suited to each viewer.
                </p>
                <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">
                    Python
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Jupyter Notebook
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    GitHub
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="h-8 px-3 bg-transparent" asChild>
                    <a
                      href="https://github.com/Dev-Raam/Movie-Recommendation-System"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="w-3 h-3" />
                      <span className="text-xs">GitHub</span>
                    </a>
                  </Button>

                  {/* Live Demo Button */}
                    <Button variant="outline" size="sm" className="h-8 px-3 bg-transparent" asChild>
                      <a
                        href="https://your-live-site.netlify.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Globe className="w-3 h-3" />
                        <span className="text-xs">Live Demo</span>
                      </a>
                    </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden w-full max-w-lg">
              <div className="h-40 md:h-48 bg-teal-100 flex items-center justify-center">
                <Image
                  src="/wansaf.png"
                  alt="Ui/UX project"
                  width={300}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardContent className="p-4 md:p-6">
                <h3 className="font-semibold text-base md:text-lg mb-2">Wander Safety | UI/UX</h3>
                <p className="text-sm italic text-muted-foreground mb-3">
                  Empowering travelers with safety, connectivity, and peace of mind.
                </p>
                <p className="text-xs md:text-sm text-muted-foreground mb-4 leading-relaxed">
                  WanderSafe was born out of the need to make solo travel safer, especially for women. 
                  Inspired by stories of travelers feeling vulnerable in unfamiliar places, we created 
                  an app that offers instant SOS alerts to authorities and hospitals, real-time language 
                  translation, and a community to share experiences and warn others about scams. It's designed 
                  to help travelers feel connected and supported, offering peace of mind with features like safe 
                  hotel and cab bookings. WanderSafe is more than an app—it's a travel companion that ensures help is always a tap away.
                </p>
                <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">
                    Figma
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Prototyping 
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="h-8 px-3 bg-transparent" asChild>
                    <a
                      href="https://www.figma.com/design/eKT5sOq1FXjwFBeyFDJ5ma/Wander-Saety?node-id=0-1&p=f&t=v3emjcgWHVUWCYe4-0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <SiFigma className="w-3 h-3" />
                      <span className="text-xs">Figma</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 border-t">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Contact Info */}
              <div className="sm:col-span-2 lg:col-span-1">
                <h3 className="font-semibold text-base md:text-lg mb-4">Get in Touch</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    <span className="text-xs md:text-sm break-all">ram2434700@email.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    <span className="text-xs md:text-sm">+91 77106 68508</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    <span className="text-xs md:text-sm">India</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="font-semibold text-base md:text-lg mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <a
                    href="#about"
                    className="block text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    About
                  </a>
                  <a
                    href="#experience"
                    className="block text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Experience
                  </a>
                  <a
                    href="#projects"
                    className="block text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Projects
                  </a>
                  <a
                    href="#skills"
                    className="block text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Skills
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-semibold text-base md:text-lg mb-4">Connect</h3>
                <div className="flex gap-2 md:gap-3">
                  {/* GitHub Button */}
                  <Button variant="outline" size="icon" className="h-8 w-8 md:h-10 md:w-10 bg-transparent" asChild>
                    <a href="https://github.com/dev-raam" target="_blank" rel="noopener noreferrer">
                      <Github className="w-3 h-3 md:w-4 md:h-4" />
                    </a>
                  </Button>

                  {/* LinkedIn Button */}
                  <Button variant="outline" size="icon" className="h-8 w-8 md:h-10 md:w-10 bg-transparent" asChild>
                    <a href="https://linkedin.com/in/ram2004" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-3 h-3 md:w-4 md:h-4" />
                    </a>
                  </Button>

                  {/* Twitter X Button */}
                  <Button variant="outline" size="icon" className="h-8 w-8 md:h-10 md:w-10 bg-transparent" asChild>
                    <a href="https://x.com/sharnn69" target="_blank" rel="noopener noreferrer">
                      {isDark ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                          <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="m13.458 9.122l7.516-7.965h2.491l-.01.011l-8.89 9.424l8.139 10.802a.906.906 0 0 1-.658 1.45H16.95a.9.9 0 0 1-.659-.359l-5.727-7.601l-7.472 7.96H.535l8.922-9.43L1.318 2.612a.906.906 0 0 1 .724-1.452h4.965c.285 0 .553.134.724.361zm-.763 2a1 1 0 0 1-.07-.093l-6.07-8.056H3.86l13.607 18.06h2.696z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                          <path
                            fill="#000"
                            fillRule="evenodd"
                            d="m13.458 9.122l7.516-7.965h2.491l-.01.011l-8.89 9.424l8.139 10.802a.906.906 0 0 1-.658 1.45H16.95a.9.9 0 0 1-.659-.359l-5.727-7.601l-7.472 7.96H.535l8.922-9.43L1.318 2.612a.906.906 0 0 1 .724-1.452h4.965c.285 0 .553.134.724.361zm-.763 2a1 1 0 0 1-.07-.093l-6.07-8.056H3.86l13.607 18.06h2.696z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </a>
                  </Button>

                  {/* YouTube Button */}
                  <Button variant="outline" size="icon" className="h-8 w-8 md:h-10 md:w-10 bg-transparent" asChild>
                    <a href="https://www.youtube.com/@Sharnn69" target="_blank" rel="noopener noreferrer">
                      <Youtube className="w-3 h-3 md:w-4 md:h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t mt-6 md:mt-8 pt-6 md:pt-8 flex flex-col sm:flex-row justify-between items-center gap-2 md:gap-4"></div>
          </div>
        </div>
      </footer>

      {/* Fixed Bottom Navigation Bar */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-background/80 backdrop-blur-md border rounded-full px-4 py-2 shadow-lg">
          <div className="flex items-center gap-2">
            {/* Home Button */}
            <div className="group relative">
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full hover:bg-muted transition-all duration-200 group-hover:scale-110"
                onClick={scrollToTop}
              >
                <Home className="w-4 h-4" />
              </Button>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                Home
              </div>
            </div>

            {/* Divider Line */}
            <div className="w-px h-6 bg-border"></div>

            {/* GitHub Button */}
            <div className="group relative">
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full hover:bg-muted transition-all duration-200 group-hover:scale-110"
                asChild
              >
                <a href="https://github.com/dev-raam" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                </a>
              </Button>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                GitHub
              </div>
            </div>

            {/* LinkedIn Button */}
            <div className="group relative">
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full hover:bg-muted transition-all duration-200 group-hover:scale-110"
                asChild
              >
                <a href="https://linkedin.com/in/ram2004" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" />
                </a>
              </Button>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                LinkedIn
              </div>
            </div>

            {/* Twitter X Button */}
            <div className="group relative">
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full hover:bg-muted transition-all duration-200 group-hover:scale-110"
                asChild
              >
                <a href="https://x.com/sharnn69" target="_blank" rel="noopener noreferrer">
                  {isDark ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path
                        fill="#fff"
                        fillRule="evenodd"
                        d="m13.458 9.122l7.516-7.965h2.491l-.01.011l-8.89 9.424l8.139 10.802a.906.906 0 0 1-.658 1.45H16.95a.9.9 0 0 1-.659-.359l-5.727-7.601l-7.472 7.96H.535l8.922-9.43L1.318 2.612a.906.906 0 0 1 .724-1.452h4.965c.285 0 .553.134.724.361zm-.763 2a1 1 0 0 1-.07-.093l-6.07-8.056H3.86l13.607 18.06h2.696z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path
                        fill="#000"
                        fillRule="evenodd"
                        d="m13.458 9.122l7.516-7.965h2.491l-.01.011l-8.89 9.424l8.139 10.802a.906.906 0 0 1-.658 1.45H16.95a.9.9 0 0 1-.659-.359l-5.727-7.601l-7.472 7.96H.535l8.922-9.43L1.318 2.612a.906.906 0 0 1 .724-1.452h4.965c.285 0 .553.134.724.361zm-.763 2a1 1 0 0 1-.07-.093l-6.07-8.056H3.86l13.607 18.06h2.696z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </a>
              </Button>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                X
              </div>
            </div>

            {/* YouTube Button */}
            <div className="group relative">
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full hover:bg-muted transition-all duration-200 group-hover:scale-110"
                asChild
              >
                <a href="https://www.youtube.com/@Sharnn69" target="_blank" rel="noopener noreferrer">
                  <Youtube className="w-4 h-4" />
                </a>
              </Button>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                YouTube
              </div>
            </div>

            {/* Divider Line Before Theme Toggle */}
            <div className="w-px h-6 bg-border"></div>

            {/* Theme Toggle */}
            <div className="group relative">
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full hover:bg-muted transition-all duration-200 group-hover:scale-110"
                onClick={toggleTheme}
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                {isDark ? "Light Mode" : "Dark Mode"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
