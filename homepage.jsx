"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  MessageCircle,
  BookOpen,
  Book,
  Filter,
  FolderOpen,
  ClipboardList,
  X,
  Send,
  Flame,
} from "lucide-react";

export default function App() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div
      className="min-h-screen p-8 font-gotham relative"
      style={{
        background: "linear-gradient(to bottom right, #F2E6EE, #977DFF)",
      }}
    >
      {/* INNER CONTAINER */}
      <div className="min-h-screen p-10 bg-transparent max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-12 tracking-tight">
          Standardized Test Teaching Platform
        </h1>

        {/* Tabs */}
        <Tabs defaultValue="teacher" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-white/30 backdrop-blur-md rounded-xl p-1 shadow-inner">
            <TabsTrigger
              value="teacher"
              className="data-[state=active]:bg-white/80 data-[state=active]:shadow-md rounded-lg"
            >
              Teacher
            </TabsTrigger>
            <TabsTrigger
              value="student"
              className="data-[state=active]:bg-white/80 data-[state=active]:shadow-md rounded-lg"
            >
              Student
            </TabsTrigger>
          </TabsList>

          {/* ---------------------- TEACHER INTERFACE ---------------------- */}
          <TabsContent value="teacher">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              {/* Lesson & Test Builder */}
              <Card className="shadow-xl rounded-2xl hover:shadow-2xl transition-shadow bg-white/80">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <BookOpen className="text-blue-600" />
                    <h2 className="text-2xl font-semibold">
                      Test Builder
                    </h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Create full-length tests with AI support.
                    Build mini quizzes or skill-focused drills easily.
                  </p>
                  <Button className="mt-6" aria-label="Create a Test">
                    Create a Test
                  </Button>
                </CardContent>
              </Card>

              {/* Customization & Filtering */}
              <Card className="shadow-xl rounded-2xl hover:shadow-2xl transition-shadow bg-white/80">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Book className="text-green-600" />
                    <h2 className="text-2xl font-semibold">
                      Lesson Builder
                    </h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Design lessons with AI support.
                  </p>
                  <Button className="mt-6" aria-label="Set Filters">
                    Design your Lesson
                  </Button>
                </CardContent>
              </Card>

              {/* Assignment & Class Management */}
              <Card className="shadow-xl rounded-2xl hover:shadow-2xl transition-shadow bg-white/80">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <ClipboardList className="text-purple-600" />
                    <h2 className="text-2xl font-semibold">
                      Assignment & Class Management
                    </h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Assign exercises to students, track progress, and auto-grade
                    tests with detailed dashboards.
                  </p>
                  <Button className="mt-6" aria-label="Manage Class">
                    Manage Class
                  </Button>
                </CardContent>
              </Card>

              {/* Content Bank & Freemium */}
              <Card className="shadow-xl rounded-2xl hover:shadow-2xl transition-shadow bg-white/80">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <FolderOpen className="text-orange-600" />
                    <h2 className="text-2xl font-semibold">
                      Content Bank & Freemium
                    </h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Browse available materials, unlock premium content, or
                    contribute your own resources.
                  </p>
                  <Button className="mt-6" aria-label="Browse Materials">
                    Browse Materials
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* ---------------------- STUDENT INTERFACE ---------------------- */}
          <TabsContent value="student">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              {/* Assignments */}
              <Card className="shadow-xl rounded-2xl hover:shadow-2xl transition-shadow bg-white/80">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <ClipboardList className="text-purple-600" />
                    <h2 className="text-2xl font-semibold">Assignments</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    View and complete assigned tests or quizzes. Get instant
                    feedback after submission.
                  </p>
                  <Button className="mt-6" aria-label="View Assignments">
                    View Assignments
                  </Button>
                </CardContent>
              </Card>

              {/* Practice & Study */}
              <Card className="shadow-xl rounded-2xl hover:shadow-2xl transition-shadow bg-white/80">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <BookOpen className="text-blue-600" />
                    <h2 className="text-2xl font-semibold">Practice & Study</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Access practice questions by skill, difficulty, or topic.
                    Track improvement over time.
                  </p>
                  <Button className="mt-6" aria-label="Start Practice">
                    Start Practicing
                  </Button>
                </CardContent>
              </Card>

              {/* Content Bank */}
              <Card className="shadow-xl rounded-2xl hover:shadow-2xl transition-shadow bg-white/80">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <FolderOpen className="text-orange-600" />
                    <h2 className="text-2xl font-semibold">Content Bank & Freemium</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Browse available materials, unlock premium content, or
                    contribute your own resources.
                  </p>
                  <Button className="mt-6" aria-label="Browse Content">
                    Browse Materials
                  </Button>
                </CardContent>
              </Card>
              <Card className="shadow-xl rounded-2xl hover:shadow-2xl transition-shadow bg-white/80">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Flame className="text-orange-600" />
                    <h2 className="text-2xl font-semibold">Dashboard</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    See your progress, summary, and personal recommendations.
                  </p>
                  <Button className="mt-6" aria-label="Browse Content">
                    Open Dashboard
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* ---------------------- FLOATING CHAT BUBBLE ---------------------- */}
      <div className="fixed bottom-6 right-6">
        {/* Bubble button */}
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="bg-pink-600 text-white p-4 rounded-full shadow-xl hover:bg-pink-700 transition"
        >
          <MessageCircle size={28} />
        </button>

        {/* Chat window */}
        {chatOpen && (
          <div className="absolute bottom-16 right-0 w-80 bg-white rounded-xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-center bg-pink-600 text-white px-4 py-2">
              <h3 className="font-semibold">AI Chatbot Support</h3>
              <button onClick={() => setChatOpen(false)}>
                <X size={20} />
              </button>
            </div>

            {/* Messages area */}
            <div className="p-4 h-64 overflow-y-auto text-gray-700">
              <p className="text-sm text-gray-500">👋 Hi! How can I help you today?</p>
            </div>

            {/* Input area */}
            <div className="flex items-center border-t p-2">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-grow px-2 py-1 text-sm border rounded-lg focus:outline-none"
              />
              <button className="ml-2 text-pink-600 hover:text-pink-700">
                <Send size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
