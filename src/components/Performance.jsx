"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis,YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A bar chart"

const chartData = [
    
    { month: "July", desktop: 25 },
    { month: "August", desktop: 20},
    { month: "September", desktop: 30 },
    { month: "October", desktop: 22 },
    { month: "November", desktop: 17 },
    { month: "December", desktop: 29 },
  
  
  ]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} 

export function Performance() {
  return (
    <Card >
      <CardHeader>
        <CardTitle>Bar Chart</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent  >
        <ChartContainer config={chartConfig} className="h-[500px] w-full">
          <BarChart               accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
              top: 20,
              bottom: 20,
            }}
            className="w-full h-full"
>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`} // Format Y-axis as dollars
              style={{ fontSize: '18px' }}
              interval={0} // Display all ticks
              domain={[0, 'dataMax']} // Set domain to start from 0 and end at the maximum value in data
              ticks={[0, 10, 20, 30]} 
              stroke="#000000" // Black text for Y-axis
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} barSize={10}  />
          </BarChart>
        </ChartContainer>
      </CardContent>
     
    </Card>
  )
}
