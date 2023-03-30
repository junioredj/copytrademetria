export function Footer(){
    return (
        <footer className='footer'>
            <span className="footer-msg">
                Copyright © &nbsp;<a href="/dashboard"> Traders Dash </a>&nbsp;- atualizado em {new Date().getFullYear()}
            </span>
        </footer>
    );
}