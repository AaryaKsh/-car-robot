input.onButtonPressed(Button.AB, function () {
	
})
radio.onReceivedValue(function (name, value) {
    if (name == "l") {
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 100)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 0)
    } else if (name == "r") {
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 0)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 100)
    } else if (name == "stop") {
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 0)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 0)
    } else if (name == "f") {
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 100)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 100)
    } else if (name == "re") {
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Reverse, 100)
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Reverse, 100)
    }
})
basic.showIcon(IconNames.Heart)
radio.setGroup(8)
motobit.enable(MotorPower.On)
