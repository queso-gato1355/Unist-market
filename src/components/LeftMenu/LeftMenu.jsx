import './LeftMenu.css'

export default function LeftMenu() {
    return (
        <div className='left-menu'>
            <div className='filter-title'>필터</div>
            <ul>
                <li>First Filter</li>
                <li>Second Filter</li>
                <li>Third Filter</li>
                <li>Fourth Filter</li>
                <li>Fifth Filter</li>
                <li>Sixth Filter</li>
            </ul>
        </div>
    );
}