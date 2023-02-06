
import MainRouting from './Routing/MainRouting';
import { ChakraProvider } from '@chakra-ui/react'
function App() {
  return (
    <ChakraProvider>

      <MainRouting />
    </ChakraProvider>
  );
}

export default App;
