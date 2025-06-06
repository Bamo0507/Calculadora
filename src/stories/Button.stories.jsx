import Button from "@components/Button"

import '@styles/global.css'

// button stories
/* eslint-disable no-unused-vars */
export default {
    title: 'Botones de Calculadora',
    component: Button,
    decorators: [
        (Story) => (
            <div className="w-1/12 flex items-center justify-center bg-slate-100">
                <Story />
            </div>
        ),
    ],
    argTypes: {
        label: {
            control: {
                type: 'text'
            }
        },
        onClick: {
            action: 'clicked'
        },
        type: {
            control: {
                type: 'text'
            }
        }
    }
}

const Template = (args) => <Button {...args} />

export const operatorButton = Template.bind({})
operatorButton.args = {
    label: 'Suma',
    type: 'arithmetic',
    onClick: () => console.log('Suma clicked')
}

export const numberButton = Template.bind({})
numberButton.args = {
    label: '1',
    type: 'number',
    onClick: () => console.log('1 clicked')
}

export const interactionButton = Template.bind({})
interactionButton.args = {
    label: 'AC',
    type: 'interaction',
    onClick: () => console.log('AC clicked')
}

export const formatButton = Template.bind({})
formatButton.args = {
    label: '+/-',
    type: 'format',
    onClick: () => console.log('+/- clicked')
}

export const equalsButton = Template.bind({})
equalsButton.args = {
    label: '=',
    type: 'equals',
    onClick: () => console.log('= clicked')
}