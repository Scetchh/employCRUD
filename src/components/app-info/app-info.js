import './app-info.css';

const AppInfo = ({employyers, increased}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {employyers}</h2>
            <h2>Премию получат: {increased}</h2>
        </div>
    )
}

export default AppInfo;