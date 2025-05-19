import Screen from '@components/Screen'
import '@styles/global.css'

export default {
    title: 'Pantalla de Calculadora',
    component: Screen,
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
    text_display: '0'
}