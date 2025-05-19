import ButtonGrid from '@components/ButtonGrid'
import buttons from '@utils/ArithmeticButtons'

import '@styles/global.css'

export default {
    title: 'Grid de Botones',
    component: ButtonGrid,
    argTypes: {
        buttons: {
            control: {
                type: 'object'
            }
        },
        onButtonClick: {
            action: 'clicked'
        }
    }
}

const Template = (args) => <ButtonGrid {...args} />

export const Default = Template.bind({})
Default.args = {
    buttons: buttons,
    onButtonClick: (button) => console.log(`${button.text} clicked`)
}