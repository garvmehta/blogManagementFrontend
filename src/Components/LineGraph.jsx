import Chart from "chart.js/auto";
import { Flex } from "@chakra-ui/react";
import { Line } from "react-chartjs-2";
const LineGraph = ()=>{
    const labels = ["January", "February", "March", "April", "May", "June"];
    const data = {
        labels: labels,
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: [0, 10, 5, 2, 20, 30, 45],
          },
        ],
      };
    return(
        <Flex
                    width={"50%"}
                    bg={'white'}
                    // border={'1px'}
                    p={2}
                    height={'100%'}
                    shadow={'md'}
                    rounded={'md'}
                    mx={2}
                // style={{}}
                >

                    <Line data={data}/>
                </Flex>
    )
}
export default LineGraph;