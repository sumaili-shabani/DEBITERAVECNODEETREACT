import React from "react";
import {
    PieChart, Pie, Cell, Tooltip, Legend,
    BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer
} from "recharts";

// 🎨 Couleurs personnalisées
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
    name: string;
    value: number;
}

interface Props {
    data: ChartDataItem[];
}

export default function ColumnStatsChart({ data }: Props) {
    return (
        <div className="row">


            {/* ✅ ColumnChart */}
            <div className="col-md-12">
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis allowDecimals={false} />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="value" fill="#00C49F" name="Utilisateurs" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

        </div>
    );
}
