export default function Tabs({children , buttons , ButtonContainer = "menu" }) {
    
    /// uppert case is imp in case of defining type of container
    return (
        <>
            <ButtonContainer> 
                {buttons} 
            </ButtonContainer>

            {children}
        </>
    )
}