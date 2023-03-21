import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const Charts = ({data, areas}) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart
                data={data}
                margin={{
                    top: 40,
                    right: 30,
                    left: 0,
                    bottom: 40,
                }}
            >
                <CartesianGrid 
                    strokeOpacity={0.2} 
                    vertical={false} 
                />
                <XAxis 
                    axisLine={false}
                    tickLine={false}
                    dataKey="name" 
                />
                <YAxis 
                    domain={[0]}
                    axisLine={false}
                    tickLine={false}
                />
                <Tooltip wrapperStyle={{background: '#000'}}/>
                {areas.map((area) => (
                    <Area 
                        key={area.key}
                        stackId="a"
                        type="linear" 
                        dataKey={area.key} 
                        stroke={area.fill} 
                        fill={area.fill} />   
                ))}
            </AreaChart>
        </ResponsiveContainer>
    );
};