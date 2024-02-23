import { createSlice } from '@reduxjs/toolkit'

type ConfigurationsState = {
  isConfigPanelOpen: boolean
}

const initialState: ConfigurationsState = {
  isConfigPanelOpen: false
}

export const configButtonSlice = createSlice({
  name: 'configButton',
  initialState: initialState,
  reducers: {
    setOpen: (state: ConfigurationsState) => {
      state.isConfigPanelOpen = true
    },
    setClose: (state: ConfigurationsState) => {
      state.isConfigPanelOpen = false
    },
  }
})

// Action creators are generated for each case reducer function
export const { setOpen, setClose } = configButtonSlice.actions

export default configButtonSlice.reducer
