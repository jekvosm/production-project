import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit'
import { Story } from '@storybook/react'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer,
}

export const StoreDecorator =
  (
    state: DeepPartial<StateSchema>,
    asyncRedusers?: DeepPartial<ReducersMapObject<StateSchema>>
  ) =>
  (StoryComponent: Story) => {
    return (
      <StoreProvider
        initialState={state}
        asyncRedusers={{ ...defaultAsyncReducers, ...asyncRedusers }}
      >
        <StoryComponent />
      </StoreProvider>
    )
  }
