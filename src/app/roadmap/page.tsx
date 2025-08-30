import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function Roadmap() {
  const roadmapItems = [
    {
      category: "Frontend Development",
      color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
      items: [
        {
          title: "Advanced React Patterns",
          description: "Master advanced React patterns like render props, higher-order components, and compound components",
          status: "completed",
          progress: 100,
          timeline: "Q4 2024"
        },
        {
          title: "Next.js 15 Features",
          description: "Explore the latest Next.js features including App Router, Server Components, and new performance optimizations",
          status: "in-progress",
          progress: 75,
          timeline: "Q1 2025"
        },
        {
          title: "Micro-frontends Architecture",
          description: "Learn to build and maintain scalable micro-frontend applications using Module Federation",
          status: "planned",
          progress: 0,
          timeline: "Q2 2025"
        }
      ]
    },
    {
      category: "Backend Development",
      color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
      items: [
        {
          title: "GraphQL & Apollo Server",
          description: "Build robust GraphQL APIs with Apollo Server, including subscriptions and federation",
          status: "in-progress",
          progress: 60,
          timeline: "Q1 2025"
        },
        {
          title: "Microservices with Docker",
          description: "Design and deploy microservices architecture using Docker containers and Kubernetes orchestration",
          status: "planned",
          progress: 20,
          timeline: "Q2 2025"
        },
        {
          title: "Event-Driven Architecture",
          description: "Implement event-driven systems using message queues like RabbitMQ and Apache Kafka",
          status: "planned",
          progress: 0,
          timeline: "Q3 2025"
        }
      ]
    },
    {
      category: "Cloud & DevOps",
      color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
      items: [
        {
          title: "AWS Solutions Architect",
          description: "Achieve AWS Solutions Architect certification and master cloud architecture patterns",
          status: "in-progress",
          progress: 45,
          timeline: "Q2 2025"
        },
        {
          title: "Infrastructure as Code",
          description: "Master Terraform and AWS CDK for automated infrastructure provisioning and management",
          status: "planned",
          progress: 15,
          timeline: "Q3 2025"
        },
        {
          title: "CI/CD Optimization",
          description: "Implement advanced CI/CD pipelines with GitHub Actions, including testing automation and deployment strategies",
          status: "completed",
          progress: 100,
          timeline: "Q4 2024"
        }
      ]
    },
    {
      category: "Emerging Technologies",
      color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
      items: [
        {
          title: "AI/ML Integration",
          description: "Learn to integrate AI/ML models into web applications using TensorFlow.js and OpenAI APIs",
          status: "planned",
          progress: 10,
          timeline: "Q3 2025"
        },
        {
          title: "WebAssembly (WASM)",
          description: "Explore WebAssembly for high-performance web applications and cross-platform development",
          status: "planned",
          progress: 0,
          timeline: "Q4 2025"
        },
        {
          title: "Web3 & Blockchain",
          description: "Build decentralized applications (dApps) using Ethereum, smart contracts, and Web3.js",
          status: "planned",
          progress: 5,
          timeline: "Q4 2025"
        }
      ]
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return "✅"
      case "in-progress":
        return "🔄"
      case "planned":
        return "📅"
      default:
        return "📋"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-600 dark:text-green-400"
      case "in-progress":
        return "text-blue-600 dark:text-blue-400"
      case "planned":
        return "text-gray-600 dark:text-gray-400"
      default:
        return "text-gray-600 dark:text-gray-400"
    }
  }

  return (
    <div className="font-sans min-h-screen bg-background">
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Learning Roadmap
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My continuous learning journey and professional development goals. 
            Staying current with emerging technologies and expanding my skill set.
          </p>
        </div>

        <div className="space-y-8">
          {roadmapItems.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex items-center gap-3 mb-6">
                <Badge className={category.color}>
                  {category.category}
                </Badge>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <Card key={itemIndex} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <CardTitle className="text-lg flex items-center gap-2">
                          <span>{getStatusIcon(item.status)}</span>
                          {item.title}
                        </CardTitle>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-sm">
                          <span className={getStatusColor(item.status)} >
                            {item.status.charAt(0).toUpperCase() + item.status.slice(1).replace('-', ' ')}
                          </span>
                          <span className="text-muted-foreground">{item.progress}%</span>
                        </div>
                        <Progress value={item.progress} className="h-2" />
                      </div>
                      
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">Timeline:</span>
                        <Badge variant="outline">{item.timeline}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                {roadmapItems.flatMap(c => c.items).filter(item => item.status === 'completed').length}
              </div>
              <p className="text-muted-foreground">Completed Goals</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {roadmapItems.flatMap(c => c.items).filter(item => item.status === 'in-progress').length}
              </div>
              <p className="text-muted-foreground">In Progress</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-gray-600 dark:text-gray-400 mb-2">
                {roadmapItems.flatMap(c => c.items).filter(item => item.status === 'planned').length}
              </div>
              <p className="text-muted-foreground">Planned</p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Let&apos;s Learn Together
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Always open to discussing new technologies, sharing knowledge, and collaborating on learning projects. 
            Feel free to reach out if you&apos;re working on similar goals!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Card className="p-4 bg-background/50">
              <p className="text-sm text-muted-foreground">
                <strong>Current Focus:</strong> Next.js 15, GraphQL, and AWS Architecture
              </p>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}