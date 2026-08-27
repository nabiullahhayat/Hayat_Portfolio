import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'
import { CHART_COLORS, CHART_DATA } from '../../constants/charts'
import ChartTooltip from './ChartTooltip'

function SkillsRadarChart() {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <RadarChart data={CHART_DATA.skillProficiency} cx="50%" cy="50%" outerRadius="75%">
        <PolarGrid stroke={CHART_COLORS.grid} />
        <PolarAngleAxis
          dataKey="skill"
          tick={{ fill: CHART_COLORS.text, fontSize: 12 }}
        />
        <PolarRadiusAxis
          angle={30}
          domain={[0, 100]}
          tick={{ fill: CHART_COLORS.text, fontSize: 10 }}
          axisLine={false}
        />
        <Radar
          name="Proficiency"
          dataKey="level"
          stroke={CHART_COLORS.cyan}
          fill={CHART_COLORS.cyan}
          fillOpacity={0.25}
          strokeWidth={2}
          animationDuration={1200}
          animationEasing="ease-out"
        />
        <Tooltip content={<ChartTooltip />} />
      </RadarChart>
    </ResponsiveContainer>
  )
}

export default SkillsRadarChart
