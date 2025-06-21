import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

// 🎨 Couleurs pour les sections
const COLORS = [
    "#0088FE", // Bleu
    "#FF69B4", // Rose
    "#00C49F", // Turquoise
    "#FFBB28", // Jaune
    "#FF8042", // Orange
    "#A28CF3", // Violet clair
    "#FF4C4C", // Rouge vif
    "#4CAF50", // Vert moyen
    "#8B4513", // Marron
    "#20B2AA"  // Bleu-vert
];

interface ChartDataItem {
    name?: string;
    value?: number;
}

interface Props {
    data: ChartDataItem[];
}

export default function BarStatsChart({ data }: Props) {
    return (
        <div className="row">
            {/* PieChart */}
            <div className="col-md-12">
              
                <ResponsiveContainer className="col-md-12" width="100%" height={300}>
                    <PieChart>
                        <Pie
                            dataKey="value"
                            isAnimationActive={true}
                            data={data}
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            label
                        >
                            {data.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>

         
        </div>
    );
}
