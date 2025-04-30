import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
    {
        subject: 'Valence',
        A: 120,
        B: 110,
        fullMark: 150,
    },
    {
        subject: 'Arousal',
        A: 98,
        B: 130,
        fullMark: 150,
    },
    {
        subject: 'Facial Expression',
        A: 86,
        B: 130,
        fullMark: 150,
    },

    {
        subject: 'Behavioral & Vocal Tone',
        A: 85,
        B: 90,
        fullMark: 150,
    },
    {
        subject: 'Self-reported Scales',
        A: 65,
        B: 85,
        fullMark: 150,
    },
];

export default class ChartRadar extends PureComponent {

    render() {
        return (
            <ResponsiveContainer width="100%" height={300}>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis />
                    <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        );
    }
}
