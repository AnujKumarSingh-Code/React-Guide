export default function Tabs({children , buttons , buttonContainer }) {
    const ButtonContainer = buttonContainer
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