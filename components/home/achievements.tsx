"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Award, Users, Star, Laptop,Rocket, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Achievement {
  icon: React.ReactNode;
  title: string;
  colorClass: string;
}

const achievements: Achievement[] = [
  {
    icon: <Award className="h-6 w-6" />,
    title: "2nd Place in College Project Presentation",
    colorClass: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: <Medal className="h-6 w-6" />,
    title: "Employee of the Month (3 Times) at Artuniverse",
    colorClass: "text-green-600 dark:text-green-400",
  },
  {
    icon: <Trophy className="h-6 w-6" />,
    title: "1st Prize in District Cricket Tournament",
    colorClass: "text-amber-600 dark:text-amber-400",
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "Improved API Performance by 35% using Redis Caching",
    colorClass: "text-red-600 dark:text-red-400",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Increased Organic Traffic by 30% via SEO Optimization",
    colorClass: "text-indigo-600 dark:text-indigo-400",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Led a Team of 5 Developers to Launch High-Traffic API Module",
    colorClass: "text-teal-600 dark:text-teal-400",
  },
  {
    icon: <Star className="h-6 w-6" />,
    title: "Awarded 'Top Contributor' at Artuniverse for Innovation in SaaS Web Solutions",
    colorClass: "text-yellow-600 dark:text-yellow-400",
  },
  {
    icon: <Laptop className="h-6 w-6" />,
    title: "Developed 3D Property Explorer — an Interactive Real Estate Visualization Tool",
    colorClass: "text-purple-600 dark:text-purple-400",
  }
];


export function Achievements() {
  return (
    <section className="py-12 md:py-24 bg-muted/30 relative overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Achievements
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
            Recognition and milestones from my technical journey
          </p>
        </motion.div>

        <div className="mt-12 flex flex-wrap gap-4 justify-center">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.75rem)]"
            >
              <Card className="h-full border-2 hover:border-primary transition-all duration-300">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className={`${achievement.colorClass} shrink-0`}>
                    {achievement.icon}
                  </div>
                  <div className="text-left">
                    <p className="font-medium">{achievement.title}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        {/*         
        <div className="mt-10 inline-flex flex-wrap justify-center gap-2">
          <Badge variant="secondary" className="text-sm py-1.5 px-3">Technical Leadership</Badge>
          <Badge variant="secondary" className="text-sm py-1.5 px-3">Hackathon Winner</Badge>
          <Badge variant="secondary" className="text-sm py-1.5 px-3">Research</Badge>
          <Badge variant="secondary" className="text-sm py-1.5 px-3">Gaming</Badge>
        </div> */}
      </div>
    </section>
  );
}