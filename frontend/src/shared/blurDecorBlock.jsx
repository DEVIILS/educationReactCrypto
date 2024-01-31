export const BlurDecorBlock = () => {
    return (
        <>
            <div
                className="pulse"
                style={{
                    left: '9rem',
                    height: '300px',
                    width: '300px',
                    borderRadius: '50%',
                    background: '#857aae',
                    position: 'fixed',
                    filter: 'blur(200px)',
                }}
            ></div>
            <div
                className="pulse"
                style={{
                    top: '11rem',
                    left: '116rem',
                    height: '300px',
                    width: '300px',
                    borderRadius: '50%',
                    background: 'rgb(133, 122, 174)',
                    position: 'fixed',
                    filter: 'blur(183px)',
                }}
            ></div>
            <div
                className="pulse"
                style={{
                    top: '-16rem',
                    left: '91rem',
                    height: '300px',
                    width: '600px',
                    borderRadius: '80%',
                    background: 'rgb(22 119 255)',
                    position: 'fixed',
                    filter: 'blur(85px)',
                    opacity: '0.2',
                }}
            ></div>
            <div
                // className="pulbse"
                style={{
                    top: '33rem',
                    left: '13rem',
                    height: '402px',
                    width: '2000px',
                    borderRadius: '80%',
                    background: 'linear-gradient(rgb(251, 194, 235), rgb(166, 193, 238))',
                    position: 'fixed',
                    filter: 'blur(102px)',
                    opacity: '.4',
                }}
            ></div>
            <div
                className="pulse"
                style={{
                    top: '28rem',
                    left: '97rem',
                    height: '594px',
                    width: '547px',
                    borderRadius: '80%',
                    background: 'linear-gradient(to bottom right, #a800f0, #29baf0)',
                    position: 'fixed',
                    filter: 'blur(129px)',
                    opacity: '.3',
                }}
            ></div>
        </>
    );
};
