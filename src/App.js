
import MainRouting from './Routing/MainRouting';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { Store } from './Store';


function App() {
  
  
  return (
    <Provider store={Store}>

    <ChakraProvider>
      <MainRouting />
    </ChakraProvider>
    </Provider>
  );
}

export default App;
