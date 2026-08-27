import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { CHART_COLORS, CHART_DATA } from '../../constants/charts'
import ChartTooltip from './ChartTooltip'

function SkillsBarChart() {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <BarChart
        data={CHART_DATA.topSkills}
        layout="vertical"
        margin={{ top: 4, right: 8, left: 0, bottom: 4 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.grid} horizontal={false} />
        <XAxis
          type="number"
          domain={[0, 100]}
          tick={{ fill: CHART_COLORS.text, fontSize: 11 }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          type="category"
          dataKey="name"
          width={90}
          tick={{ fill: CHART_COLORS.text, fontSize: 11 }}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip content={<ChartTooltip />} cursor={{ fill: 'rgba(255,255,255,0.04)' }} />
        <Bar
          dataKey="value"
          name="Skill Level"
          fill="url(#barGradient)"
          radius={[0, 6, 6, 0]}
          animationDuration={1400}
          animationEasing="ease-out"
        />
        <defs>
          <linearGradient id="barGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={CHART_COLORS.cyan} />
            <stop offset="100%" stopColor={CHART_COLORS.violet} />
          </linearGradient>
        </defs>
      </BarChart>
    </ResponsiveContainer>
  )
}

export default SkillsBarChart
