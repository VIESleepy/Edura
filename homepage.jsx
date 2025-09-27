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
        fontFamily: "'Gotham', 'Helvetica Neue', Arial, sans-serif",
        background: "linear-gradient(135deg, #F3EDF9, #8C7CFF)",
      }}
    >
      <div className="min-h-screen p-10 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-12 tracking-tight leading-tight">
          Standardized Test Teaching Platform
        </h1>

        {/* Tabs */}
        <Tabs defaultValue="teacher" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-white/40 backdrop-blur-lg rounded-2xl p-1 shadow-inner">
            <TabsTrigger
              value="teacher"
              className="text-gray-700 data-[state=active]:bg-white data-[state=active]:shadow-lg rounded-lg transition"
            >
              Teacher
            </TabsTrigger>
            <TabsTrigger
              value="student"
              className="text-gray-700 data-[state=active]:bg-white data-[state=active]:shadow-lg rounded-lg transition"
            >
              Student
            </TabsTrigger>
          </TabsList>

          {/* Teacher Interface */}
          <TabsContent value="teacher">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              {[
                {
                  icon: <BookOpen className="text-blue-600" />,
                  title: "Test Builder",
                  desc: "Create full-length tests or mini quizzes with AI assistance.",
                  button: "Create a Test",
                },
                {
                  icon: <Book className="text-green-600" />,
                  title: "Lesson Builder",
                  desc: "Design lessons tailored to your students with AI support.",
                  button: "Design your Lesson",
                },
                {
                  icon: <ClipboardList className="text-purple-600" />,
                  title: "Assignment & Class Management",
                  desc: "Assign exercises, track progress, and auto-grade with ease.",
                  button: "Manage Class",
                },
                {
                  icon: <FolderOpen className="text-orange-600" />,
                  title: "Content Bank & Freemium",
                  desc: "Browse materials, unlock premium content, or contribute resources.",
                  button: "Browse Materials",
                },
              ].map(({ icon, title, desc, button }, idx) => (
                <Card
                  key={idx}
                  className="shadow-lg rounded-2xl hover:shadow-2xl transition-shadow bg-white/80 backdrop-blur-sm"
                >
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      {icon}
                      <h2 className="text-2xl font-semibold">{title}</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{desc}</p>
                    <Button className="mt-6 px-6 py-2" aria-label={button}>
                      {button}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Student Interface */}
          <TabsContent value="student">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              {[
                {
                  icon: <ClipboardList className="text-purple-600" />,
                  title: "Assignments",
                  desc: "View and complete assigned tests or quizzes with instant feedback.",
                  button: "View Assignments",
                },
                {
                  icon: <BookOpen className="text-blue-600" />,
                  title: "Practice & Study",
                  desc: "Access practice questions by skill, difficulty, or topic.",
                  button: "Start Practicing",
                },
                {
                  icon: <FolderOpen className="text-orange-600" />,
                  title: "Content Bank & Freemium",
                  desc: "Browse available materials or contribute your own.",
                  button: "Browse Materials",
                },
                {
                  icon: <Flame className="text-orange-600" />,
                  title: "Dashboard",
                  desc: "Track progress, view summaries, and get personal recommendations.",
                  button: "Open Dashboard",
                },
              ].map(({ icon, title, desc, button }, idx) => (
                <Card
                  key={idx}
                  className="shadow-lg rounded-2xl hover:shadow-2xl transition-shadow bg-white/80 backdrop-blur-sm"
                >
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      {icon}
                      <h2 className="text-2xl font-semibold">{title}</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{desc}</p>
                    <Button className="mt-6 px-6 py-2" aria-label={button}>
                      {button}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Floating Chat Bubble */}
      <div className="fixed bottom-6 right-6">
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="bg-pink-600 text-white p-4 rounded-full shadow-lg hover:bg-pink-700 transition"
        >
          <MessageCircle size={28} />
        </button>

        {chatOpen && (
          <div className="absolute bottom-16 right-0 w-80 bg-white rounded-xl shadow-2xl overflow-hidden">
            <div className="flex justify-between items-center bg-pink-600 text-white px-4 py-2">
              <h3 className="font-semibold">AI Chatbot Support</h3>
              <button onClick={() => setChatOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <div className="p-4 h-64 overflow-y-auto text-gray-700">
              <p className="text-sm text-gray-500">
                👋 Hi! How can I help you today?
              </p>
            </div>
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
