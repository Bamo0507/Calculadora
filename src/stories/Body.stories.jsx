import Body from '@components/Body'
import ButtonGrid from '@components/ButtonGrid'
import Screen from '@components/Screen'
import buttons from '@utils/ArithmeticButtons'

import '@styles/global.css'

export default {
    title: 'Cuerpo de Calculadora',
    component: Body,
    decorators: [
        (Story) => (
            <div className="w-screen h-screen flex items-center justify-center bg-slate-100">
                <Story />
            </div>
        ),
    ],
    argTypes: {
        digital_screen: {
            control: {
                type: 'object'
            }
        },
        buttons: {
            control: {
                type: 'object'
            }
        }
    }
}

const Template = (args) => <Body {...args} />

export const Default = Template.bind({})
Default.args = {
    digital_screen: <Screen text_display={'0'} />,
    buttons: <ButtonGrid buttons={buttons} onButtonClick={() => console.log('Button clicked')} />
}
