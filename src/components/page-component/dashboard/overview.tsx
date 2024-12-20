"use client" 
import { useEffect, useState } from 'react';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { api } from "@/utils/api";
import { Loading } from "@/components/common/loading";

interface MonthlyFeeData {
  date: string;
  total: number | undefined;
}

const CustomTooltip = ({ active, payload, label }: {
  active?: boolean;
  payload?: { value?: number }[];
  label?: string;
}) => {
  if (active && payload && payload.length && payload[0]?.value !== undefined) {
    return (
      <div className="bg-primary-foreground shadow-lg rounded-md p-4 border z-50">
        <div className="p-2">
          <p className="font-semibold">Tháng {label}</p>
          <p>Tổng phí đã thu: {payload[0].value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
        </div>
      </div>
    );
  }

  return null;
};

export function Overview() {
  const [data, setData] = useState<MonthlyFeeData[]>([]);
  const { data: fetchedData, isLoading } = api.fee.getMonthlyFees.useQuery();

  useEffect(() => {
    if (fetchedData) {
      setData(fetchedData);
    }
  }, [fetchedData]);

  if (isLoading) {
    return <Loading />;
  }

  const formatCurrency = (value: number) => {
    return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  };

  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 10, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="date"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={10}
          tickLine={false}
          axisLine={false}
          tick={{ dx: 10 }}
          tickFormatter={(value: number) => formatCurrency(value)}
        />
        <Tooltip content={<CustomTooltip />} />
        <Line type="monotone" dataKey="total" stroke="#adfa1d" strokeWidth={2} dot={{ r: 3 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}
