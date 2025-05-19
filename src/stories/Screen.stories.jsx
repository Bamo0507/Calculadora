import Screen from '@components/Screen'
import '@styles/global.css'

/* eslint-disable no-unused-vars */
export default {
    title: 'Pantalla de Calculadora',
    component: Screen,
    decorators: [
        (Story) => (
            <div className="w-1/3 h-1/12 flex items-center justify-center bg-slate-100">
                <Story />
            </div>
        ),
    ],
    argTypes: {
        text_display: {
            control: {
                type: 'text'
            }
        }
    }
}

const Template = (args) => <Screen {...args} />

export const Default = Template.bind({})
Default.args = {
    text_display: 'ERROR'
}