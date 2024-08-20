import Bar from "../components/Bar";
import Header from "../components/Header";

export default function BarChart() {
  return (
    <>
      <Header
        title={"Bar Chart"}
        subTitle={"The minimum wage in Germany, France and Spain (EUR/month)"}
      />

      <Bar />
    </>
  );
}
