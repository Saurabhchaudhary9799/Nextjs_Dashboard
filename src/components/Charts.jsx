"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis ,YAxis} from "recharts"

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

export const description = "A line chart"

const chartData = [
  { month: "May", desktop: 0 },
  { month: "June", desktop: 20 },
  { month: "July", desktop: 10 },
  { month: "August", desktop: 30 },
  { month: "September", desktop: 15 },
  { month: "October", desktop: 40 },
  { month: "November", desktop: 20 },
  { month: "December", desktop: 60 },


]


const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--color-desktop)", // Adjust the color variable as needed
  },
}

export function Charts() {
  return (
    <Card className="bg-white text-black ">
      <CardHeader>
        <CardTitle>OVERVIEW</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent >
        <ChartContainer config={chartConfig} className="h-[500px] w-full">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
            className="w-full h-full"
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              stroke="black"
              style={{ fontSize: '18px' }}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
             <YAxis
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value}k`} // Format Y-axis as dollars
              style={{ fontSize: '18px' }}
              stroke="#000000" // Black text for Y-axis
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="desktop"
              type="natural"
             stroke="black"
              strokeWidth={2}
              dot={false}
              
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
     
    </Card>
  )
}
