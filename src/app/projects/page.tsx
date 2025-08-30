import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with user authentication, product catalog, shopping cart, and payment integration. Built with modern web technologies for optimal performance.",
      image: "/api/placeholder/400/250",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Tailwind CSS"],
      demoLink: "#",
      codeLink: "https://github.com/MANIKANDAN1709",
      status: "Completed"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Perfect for agile development teams.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Material-UI"],
      demoLink: "#",
      codeLink: "https://github.com/MANIKANDAN1709",
      status: "In Progress"
    },
    {
      title: "Weather Analytics Dashboard",
      description: "A comprehensive weather analytics dashboard with interactive charts, historical data analysis, and real-time weather updates from multiple APIs.",
      image: "/api/placeholder/400/250",
      technologies: ["Vue.js", "D3.js", "Express.js", "Redis", "Chart.js"],
      demoLink: "#",
      codeLink: "https://github.com/MANIKANDAN1709",
      status: "Completed"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects, skills, and professional experience. Built with performance and accessibility in mind.",
      image: "/api/placeholder/400/250",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
      demoLink: "#",
      codeLink: "https://github.com/MANIKANDAN1709/portfolio-next",
      status: "Completed"
    },
    {
      title: "Chat Application",
      description: "Real-time chat application with private messaging, group chats, file sharing, and emoji support. Features end-to-end encryption for secure communication.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Firebase", "Socket.io", "Node.js", "CSS3"],
      demoLink: "#",
      codeLink: "https://github.com/MANIKANDAN1709",
      status: "In Progress"
    },
    {
      title: "API Gateway Service",
      description: "Microservices API gateway with rate limiting, authentication, load balancing, and monitoring. Built for scalable enterprise applications.",
      image: "/api/placeholder/400/250",
      technologies: ["Node.js", "Docker", "Kubernetes", "Redis", "PostgreSQL"],
      demoLink: "#",
      codeLink: "https://github.com/MANIKANDAN1709",
      status: "Planned"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "In Progress":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "Planned":
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
    }
  }

  return (
    <div className="font-sans min-h-screen bg-background">
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            My Projects
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of projects I&apos;ve worked on, showcasing my skills in full-stack development, 
            modern web technologies, and software architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🚀</div>
                    <p className="text-sm text-muted-foreground">Project Preview</p>
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <Badge className={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="pt-0">
                <div className="flex gap-2 w-full">
                  <Button asChild variant="default" size="sm" className="flex-1">
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <span className="mr-1">🔗</span> Demo
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="flex-1">
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                      <span className="mr-1">💻</span> Code
                    </a>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Interested in Working Together?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I&apos;m always excited to work on new projects and collaborate with other developers. 
            Let&apos;s build something amazing together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="/contact">
                📧 Get In Touch
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/MANIKANDAN1709" target="_blank" rel="noopener noreferrer">
                🐙 View GitHub
              </a>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}