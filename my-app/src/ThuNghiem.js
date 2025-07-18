import React from 'react';

function Header() {
    return (
        <header className = 'Header'>
            App Linh Tinh
            <h1>Chao mung den App Linh Tinh</h1>
            <h2>App o day rat la Linh Tinh</h2>
        </header>
    )
}
function Content () {
    return (
        <div>
            <p className='LoiChao'>Hello Xin chao </p>
            <p className='GioiThieu'>Day la app Linh Tinh Nha</p>
        </div>
    )
}

function HandleChange(e) {
    console.log(e.target.value);
}
class SecondContent extends React.Component {
    render() {
        return (
            <div>

                <h2>Đây là dùng class element</h2>
                <label htmlFor='email'>Email</label>
                <input id='email' onChange={HandleChange} placeholder='Nhập địa chỉ email' />
                <p>Viết bằng thẻ p</p>
                <ol>
                    <li>Phần tử ol 1</li>
                    <li>Phần tử ol 2</li>
                </ol>
            </div>
        )
    }
}

function PropUsing (props) {
    props.callback();
    return (
        <div>
            <p>Xin chao {props.name} </p>
            <p>Bây giờ là  {props.time} </p>
        </div>
    )
}

function handleClick() {
        console.log("You Click"); 
}

export default Header
export {Content, SecondContent, PropUsing, handleClick,HandleChange};