
import { configureStore} from '@reduxjs/toolkit';
import cartSlice from './cart';
import searchSlice from './search';




const store = configureStore({
    reducer: {
        search: searchSlice.reducer,
        cart: cartSlice.reducer
    }
});

export default store;
