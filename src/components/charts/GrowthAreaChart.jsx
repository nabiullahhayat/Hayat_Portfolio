import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { CHART_COLORS, CHART_DATA } from '../../constants/charts'
import ChartTooltip from './ChartTooltip'

function GrowthAreaChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={CHART_DATA.careerGrowth} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
        <defs>
          <linearGradient id="webGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={CHART_COLORS.cyan} stopOpacity={0.35} />
            <stop offset="95%" stopColor={CHART_COLORS.cyan} stopOpacity={0} />
          </linearGradient>
          <linearGradient id="backendGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={CHART_COLORS.violet} stopOpacity={0.35} />
            <stop offset="95%" stopColor={CHART_COLORS.violet} stopOpacity={0} />
          </linearGradient>
          <linearGradient id="mobileGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={CHART_COLORS.pink} stopOpacity={0.3} />
            <stop offset="95%" stopColor={CHART_COLORS.pink} stopOpacity={0} />
          </linearGradient>
          <linearGradient id="iotGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={CHART_COLORS.amber} stopOpacity={0.3} />
            <stop offset="95%" stopColor={CHART_COLORS.amber} stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.grid} />
        <XAxis
          dataKey="year"
          tick={{ fill: CHART_COLORS.text, fontSize: 12 }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          tick={{ fill: CHART_COLORS.text, fontSize: 11 }}
          axisLine={false}
          tickLine={false}
          domain={[0, 100]}
        />
        <Tooltip content={<ChartTooltip />} />
        <Legend
          wrapperStyle={{ fontSize: 12, color: CHART_COLORS.text, paddingTop: 12 }}
        />
        <Area
          type="monotone"
          dataKey="web"
          name="Web Dev"
          stroke={CHART_COLORS.cyan}
          fill="url(#webGrad)"
          strokeWidth={2}
          animationDuration={1400}
        />
        <Area
          type="monotone"
          dataKey="backend"
          name="Backend"
          stroke={CHART_COLORS.violet}
          fill="url(#backendGrad)"
          strokeWidth={2}
          animationDuration={1400}
        />
        <Area
          type="monotone"
          dataKey="mobile"
          name="Mobile"
          stroke={CHART_COLORS.pink}
          fill="url(#mobileGrad)"
          strokeWidth={2}
          animationDuration={1400}
        />
        <Area
          type="monotone"
          dataKey="iot"
          name="IoT"
          stroke={CHART_COLORS.amber}
          fill="url(#iotGrad)"
          strokeWidth={2}
          animationDuration={1400}
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default GrowthAreaChart
