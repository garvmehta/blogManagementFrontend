import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { Flex } from "@chakra-ui/react";
const BarGraph = () => {
  const labels = ["January", "February", "March", "April", "May", "June"];
  const data = {
    labels: labels,

    datasets: [
      {

        label: "Likes",
        backgroundColor: '#3498DB',
        borderColor: "rgba(255, 99, 132,0)",
        barThickness: 7,
        borderRadius: 20,
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };
  return (
    <Flex
      width={"50%"}
      // border={'1px'}
      height={'100%'}
      shadow={'md'}
      rounded={'md'}
      bg={'white'}
      mr={2}
    // style={{}}
    >
      <Bar data={data} />
    </Flex>
  )
}
export default BarGraph