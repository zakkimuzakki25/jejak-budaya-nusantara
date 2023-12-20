
const BubbleChat = ({message, setBubbleChat, handleClick, zIndex}) => {
    const clickHandle = () => {
        setBubbleChat(false)
        handleClick()
    }

  return (
    <div onClick={clickHandle} style={{
        position: 'fixed',
        width: '100%',
        height: '100%',
        top: '0',
        backgroundColor: 'rgba(0,0,0,0.8)',
        zIndex: `${zIndex}`,
    }}>
        <div style={{
            position: 'absolute',right: '250px', bottom: '235px',
            backgroundColor: 'var(--accent-color-secondary-50)',
            padding: '15px 20px',
            borderRadius: '15px 15px 0px 15px',
            maxWidth: '450px',
        }}>
            <div style={{
                color: 'black',
                fontFamily: 'Inter',
                fontWeight: '400',
                fontSize: '16px',
                lineHeight: '1.4',
            }}>{message}</div>
        </div>

        <div style={{
            position: 'absolute',left: '35px', bottom: '25px',
            color: 'white',
            fontFamily: 'Finger Paint',
            fontSize: '14px',
        }}>klik mana saja untuk keluar</div>
    </div>
  )
}

export default BubbleChat