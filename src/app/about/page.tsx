import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function About() {
  return (
    <div className="font-sans min-h-screen">
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            About Me
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate developer with a love for creating scalable applications and solving complex problems
          </p>
        </div>

        {/* Hero Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">
                  Hi, I&apos;m Manikandan Saminathan
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  A passionate software engineer with over 3 years of experience in building scalable web applications 
                  and data-driven solutions. I specialize in full-stack development, data engineering, and AI/ML integration.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, 
                  or sharing my knowledge through technical blogs and YouTube videos.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Full-Stack Developer</Badge>
                <Badge variant="secondary">Data Engineer</Badge>
                <Badge variant="secondary">AI/ML Enthusiast</Badge>
                <Badge variant="secondary">Open Source Contributor</Badge>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl"></div>
                <div className="relative bg-background rounded-2xl p-6 shadow-xl">
                  <Image
                    src="/profile.jpeg"
                    alt="Manikandan Saminathan"
                    width={300}
                    height={300}
                    className="rounded-xl object-cover w-72 h-72"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience & Education */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Experience */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    💼
                  </div>
                  Professional Experience
                </CardTitle>
                <CardDescription>My journey in the tech industry</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-l-2 border-primary/20 pl-4 space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      <h4 className="font-semibold">Senior Software Engineer</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">Tech Solutions Inc. • 2022 - Present</p>
                    <p className="text-sm">Leading full-stack development projects and mentoring junior developers</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 bg-primary/60 rounded-full"></div>
                      <h4 className="font-semibold">Data Engineer</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">DataFlow Corp • 2021 - 2022</p>
                    <p className="text-sm">Built scalable data pipelines and implemented ML solutions</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 bg-primary/40 rounded-full"></div>
                      <h4 className="font-semibold">Software Developer</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">StartupTech • 2020 - 2021</p>
                    <p className="text-sm">Developed web applications using modern React and Node.js</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    🎓
                  </div>
                  Education & Certifications
                </CardTitle>
                <CardDescription>Academic background and professional certifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-l-2 border-primary/20 pl-4 space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      <h4 className="font-semibold">B.Tech Computer Science</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">Anna University • 2016 - 2020</p>
                    <p className="text-sm">Focused on Software Engineering and Data Structures</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 bg-primary/60 rounded-full"></div>
                      <h4 className="font-semibold">AWS Solutions Architect</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">Amazon Web Services • 2023</p>
                    <p className="text-sm">Professional certification in cloud architecture</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 bg-primary/40 rounded-full"></div>
                      <h4 className="font-semibold">Machine Learning Specialization</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">Stanford Online • 2022</p>
                    <p className="text-sm">Advanced coursework in ML algorithms and applications</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* What I Do */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">What I Do</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I work across the full technology stack, from frontend user experiences to backend systems and data infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mb-4">
                  🌐
                </div>
                <CardTitle>Full-Stack Development</CardTitle>
                <CardDescription>Building end-to-end web applications</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Creating responsive, scalable web applications using React, Next.js, Node.js, and modern databases.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mb-4">
                  📊
                </div>
                <CardTitle>Data Engineering</CardTitle>
                <CardDescription>Building robust data pipelines</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Designing and implementing ETL pipelines, data warehouses, and real-time analytics systems.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mb-4">
                  🤖
                </div>
                <CardTitle>AI/ML Integration</CardTitle>
                <CardDescription>Implementing intelligent solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Integrating machine learning models and AI capabilities into production applications.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mb-4">
                  ☁️
                </div>
                <CardTitle>Cloud Architecture</CardTitle>
                <CardDescription>Scalable cloud solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Designing and deploying applications on AWS, Azure, and GCP with focus on scalability and cost optimization.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center mb-4">
                  📱
                </div>
                <CardTitle>Mobile Development</CardTitle>
                <CardDescription>Cross-platform mobile apps</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Building native and cross-platform mobile applications using React Native and Expo.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg flex items-center justify-center mb-4">
                  🎬
                </div>
                <CardTitle>Content Creation</CardTitle>
                <CardDescription>Technical education & tutorials</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Creating educational content, tutorials, and sharing knowledge through blogs and YouTube videos.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Fun Facts */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
            <CardHeader>
              <CardTitle className="text-center">Fun Facts About Me</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">☕</div>
                  <p className="text-sm font-medium">Coffee Enthusiast</p>
                  <p className="text-xs text-muted-foreground">5+ cups per day</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">🌃</div>
                  <p className="text-sm font-medium">Night Owl</p>
                  <p className="text-xs text-muted-foreground">Best code at 2 AM</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">📚</div>
                  <p className="text-sm font-medium">Continuous Learner</p>
                  <p className="text-xs text-muted-foreground">Always exploring new tech</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">🎮</div>
                  <p className="text-sm font-medium">Gaming Enthusiast</p>
                  <p className="text-xs text-muted-foreground">Strategy & RPG games</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}