
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function Skills() {
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
    <div className="font-sans min-h-screen">    
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Skills & Learning Journey
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My technical expertise across different domains and continuous learning roadmap for professional growth
          </p>
        </div>

        {/* Skills Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-2xl font-bold text-foreground">Current Skills & Expertise</h2>
            <Badge className="bg-primary/10 text-primary">Active</Badge>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Frontend */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Frontend Development</CardTitle>
                    <Badge variant="secondary">FE</Badge>
                  </div>
                  <CardDescription>Modern web interfaces & user experiences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">HTML5/CSS3</Badge>
                    <Badge variant="outline">JavaScript</Badge>
                    <Badge variant="outline">TypeScript</Badge>
                    <Badge variant="outline">React</Badge>
                    <Badge variant="outline">Next.js</Badge>
                    <Badge variant="outline">React Native</Badge>
                    <Badge variant="outline">Expo</Badge>
                  </div>
                  <div className="pt-2">
                    <p className="text-sm text-muted-foreground mb-2">Platform Experience</p>
                    <div className="flex flex-wrap gap-1">
                      <Badge size="sm">Web</Badge>
                      <Badge size="sm">Mobile</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Backend */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Backend Development</CardTitle>
                    <Badge variant="secondary">BE</Badge>
                  </div>
                  <CardDescription>Server-side architecture & APIs</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Node.js/Express</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Python/AI/ML</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Go</span>
                      <Badge variant="outline">Learning</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* QA */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Quality Assurance</CardTitle>
                    <Badge variant="secondary">QA</Badge>
                  </div>
                  <CardDescription>Testing strategies & automation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-medium text-sm mb-2">Unit Testing</p>
                    <div className="flex flex-wrap gap-1">
                      <Badge size="sm">Jest</Badge>
                      <Badge size="sm">Pytest</Badge>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-sm mb-2">E2E Testing</p>
                    <div className="flex flex-wrap gap-1">
                      <Badge size="sm">Playwright</Badge>
                      <Badge size="sm" variant="outline">Maestro</Badge>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-sm mb-2">Performance Testing</p>
                    <div className="flex flex-wrap gap-1">
                      <Badge size="sm">K6</Badge>
                      <Badge size="sm" variant="outline">Locust</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* DevOps */}
              <Card className="hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">DevOps & Cloud</CardTitle>
                    <Badge variant="secondary">DevOps</Badge>
                  </div>
                  <CardDescription>Infrastructure & deployment automation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">Container Technologies</span>
                      <span className="text-muted-foreground">28%</span>
                    </div>
                    <Progress value={28} className="h-2" />
                    <div className="flex gap-1 mt-2">
                      <Badge size="sm" variant="default">Docker</Badge>
                      <Badge size="sm" variant="outline">Kubernetes</Badge>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">Cloud Platforms</span>
                      <span className="text-muted-foreground">24%</span>
                    </div>
                    <Progress value={24} className="h-2" />
                    <div className="flex flex-wrap gap-1 mt-2">
                      <Badge size="sm" variant="outline">AWS</Badge>
                      <Badge size="sm" variant="default">Azure</Badge>
                      <Badge size="sm" variant="outline">GCP</Badge>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">CI/CD Tools</span>
                      <span className="text-muted-foreground">18%</span>
                    </div>
                    <Progress value={18} className="h-2" />
                    <div className="flex flex-wrap gap-1 mt-2">
                      <Badge size="sm" variant="outline">Jenkins</Badge>
                      <Badge size="sm" variant="default">GitHub Actions</Badge>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">Programming</span>
                      <span className="text-muted-foreground">12%</span>
                    </div>
                    <Progress value={12} className="h-2" />
                    <div className="flex flex-wrap gap-1 mt-2">
                      <Badge size="sm" variant="outline">Bash</Badge>
                      <Badge size="sm" variant="default">Python</Badge>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">Monitoring</span>
                      <span className="text-muted-foreground">8%</span>
                    </div>
                    <Progress value={8} className="h-2" />
                    <div className="flex flex-wrap gap-1 mt-2">
                      <Badge size="sm" variant="outline">Prometheus</Badge>
                      <Badge size="sm" variant="default">Grafana</Badge>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">IaC Tools</span>
                      <span className="text-muted-foreground">10%</span>
                    </div>
                    <Progress value={10} className="h-2" />
                    <div className="flex flex-wrap gap-1 mt-2">
                      <Badge size="sm" variant="outline">Terraform</Badge>
                      <Badge size="sm" variant="outline">Ansible</Badge>
                      <Badge size="sm" variant="default">Bicep</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Data Engineering */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Data Engineering</CardTitle>
                    <Badge variant="secondary">Data</Badge>
                  </div>
                  <CardDescription>Big data processing & ETL pipelines</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">Database & SQL</span>
                      <span className="text-muted-foreground">79.4%</span>
                    </div>
                    <Progress value={79.4} className="h-2" />
                    <div className="flex flex-wrap gap-1 mt-2">
                      <Badge size="sm" variant="default">SQL</Badge>
                      <Badge size="sm" variant="outline">PostgreSQL</Badge>
                      <Badge size="sm" variant="outline">MySQL</Badge>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">Programming</span>
                      <span className="text-muted-foreground">73.7%</span>
                    </div>
                    <Progress value={73.7} className="h-2" />
                    <div className="flex flex-wrap gap-1 mt-2">
                      <Badge size="sm" variant="default">Python</Badge>
                      <Badge size="sm" variant="outline">Scala</Badge>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">Big Data Processing</span>
                      <span className="text-muted-foreground">45.0%</span>
                    </div>
                    <Progress value={45.0} className="h-2" />
                    <div className="flex flex-wrap gap-1 mt-2">
                      <Badge size="sm" variant="default">Apache Spark</Badge>
                      <Badge size="sm" variant="outline">Hadoop</Badge>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">Streaming & Messaging</span>
                      <span className="text-muted-foreground">38.0%</span>
                    </div>
                    <Progress value={38.0} className="h-2" />
                    <div className="flex flex-wrap gap-1 mt-2">
                      <Badge size="sm" variant="default">Kafka</Badge>
                      <Badge size="sm" variant="outline">Kinesis</Badge>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">Data Warehousing</span>
                      <span className="text-muted-foreground">35.0%</span>
                    </div>
                    <Progress value={35.0} className="h-2" />
                    <div className="flex flex-wrap gap-1 mt-2">
                      <Badge size="sm" variant="default">Snowflake</Badge>
                      <Badge size="sm" variant="outline">BigQuery</Badge>
                      <Badge size="sm" variant="outline">Redshift</Badge>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">Orchestration</span>
                      <span className="text-muted-foreground">32.0%</span>
                    </div>
                    <Progress value={32.0} className="h-2" />
                    <div className="flex flex-wrap gap-1 mt-2">
                      <Badge size="sm" variant="default">Airflow</Badge>
                      <Badge size="sm" variant="outline">Prefect</Badge>
                    </div>
                  </div>

                  <div>
                    <p className="font-medium text-sm mb-2">Analytics & Visualization</p>
                    <div className="flex flex-wrap gap-1">
                      <Badge size="sm" variant="default">Power BI</Badge>
                      <Badge size="sm" variant="outline">Tableau</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Gen AI */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Generative AI & ML</CardTitle>
                    <Badge variant="secondary">AI/ML</Badge>
                  </div>
                  <CardDescription>Machine learning, AI model development & deployment</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-sm mb-2">Core Frameworks</p>
                      <div className="flex flex-wrap gap-1">
                        <Badge size="sm">Python</Badge>
                        <Badge size="sm">PyTorch</Badge>
                        <Badge size="sm">TensorFlow</Badge>
                        <Badge size="sm">Transformers/LLM</Badge>
                      </div>
                    </div>
                    
                    <div>
                      <p className="font-medium text-sm mb-2">Specialized Areas</p>
                      <div className="flex flex-wrap gap-1">
                        <Badge size="sm">NLP</Badge>
                        <Badge size="sm">Computer Vision</Badge>
                        <Badge size="sm">Reinforcement Learning</Badge>
                        <Badge size="sm">CUDA/GPU</Badge>
                      </div>
                    </div>

                    <div>
                      <p className="font-medium text-sm mb-2">AI Tools & Platforms</p>
                      <div className="flex flex-wrap gap-1">
                        <Badge size="sm">OpenAI API</Badge>
                        <Badge size="sm">LangChain</Badge>
                        <Badge size="sm">Hugging Face</Badge>
                        <Badge size="sm">Vector Databases</Badge>
                      </div>
                    </div>

                    <div>
                      <p className="font-medium text-sm mb-2">Model Development</p>
                      <div className="flex flex-wrap gap-1">
                        <Badge size="sm">Fine-tuning</Badge>
                        <Badge size="sm">Prompt Engineering</Badge>
                        <Badge size="sm">MLOps</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Video Editor */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Video Editing</CardTitle>
                    <Badge variant="secondary">Video</Badge>
                  </div>
                  <CardDescription>Video production & post-production editing</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">Adobe Premiere Pro</span>
                      <span className="text-muted-foreground">35%</span>
                    </div>
                    <Progress value={35} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">DaVinci Resolve</span>
                      <span className="text-muted-foreground">25%</span>
                    </div>
                    <Progress value={25} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">CapCut</span>
                      <span className="text-muted-foreground">20%</span>
                    </div>
                    <Progress value={20} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">Final Cut Pro</span>
                      <span className="text-muted-foreground">12%</span>
                    </div>
                    <Progress value={12} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">After Effects</span>
                      <span className="text-muted-foreground">8%</span>
                    </div>
                    <Progress value={8} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">Avid Media Composer</span>
                      <span className="text-muted-foreground">5%</span>
                    </div>
                    <Progress value={5} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">Camtasia</span>
                      <span className="text-muted-foreground">4%</span>
                    </div>
                    <Progress value={4} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">InShot</span>
                      <span className="text-muted-foreground">3%</span>
                    </div>
                    <Progress value={3} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>
        </section>

        {/* Learning Roadmap Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-2xl font-bold text-foreground">Learning Roadmap</h2>
            <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300">Future Growth</Badge>
          </div>

          <div className="space-y-8">
            {roadmapItems.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-4">
                <div className="flex items-center gap-3">
                  <Badge className={category.color}>{category.category}</Badge>
                  <div className="h-px bg-border flex-1" />
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {category.items.map((item, itemIndex) => (
                    <Card key={itemIndex} className="hover:shadow-md transition-shadow">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-lg">{getStatusIcon(item.status)}</span>
                              <CardTitle className="text-lg leading-tight">{item.title}</CardTitle>
                            </div>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge 
                                variant="outline" 
                                className={`text-xs ${getStatusColor(item.status)}`}
                              >
                                {item.status.charAt(0).toUpperCase() + item.status.slice(1).replace('-', ' ')}
                              </Badge>
                              <span className="text-xs text-muted-foreground">{item.timeline}</span>
                            </div>
                          </div>
                        </div>
                        <CardDescription className="text-sm leading-relaxed mt-2">
                          {item.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="font-medium">Progress</span>
                            <span className="text-muted-foreground">{item.progress}%</span>
                          </div>
                          <Progress value={item.progress} className="h-2" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}