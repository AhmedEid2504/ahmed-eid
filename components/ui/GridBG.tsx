

const GridBG = () => {
    return (
        <div className="-z-50 h-full w-screen absolute dark:bg-black-100 bg-clr_1 dark:bg-grid-clr_1/[0.05] bg-grid-black/[0.01] flex items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>
    )
}

export default GridBG