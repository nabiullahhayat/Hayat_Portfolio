import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import { CHART_DATA } from '../../constants/charts'
import ChartTooltip from './ChartTooltip'

function TechPieChart() {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <PieChart>
        <Pie
          data={CHART_DATA.techDistribution}
          cx="50%"
          cy="50%"
          innerRadius={55}
          outerRadius={95}
          paddingAngle={4}
          dataKey="value"
          nameKey="name"
          animationDuration={1200}
          animationEasing="ease-out"
        >
          {CHART_DATA.techDistribution.map((entry) => (
            <Cell key={entry.name} fill={entry.color} stroke="transparent" />
          ))}
        </Pie>
        <Tooltip content={<ChartTooltip />} />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default TechPieChart
