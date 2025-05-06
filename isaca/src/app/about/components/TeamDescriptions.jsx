const TeamDescriptions = () => {

    const officers = ['Hannah Lam', 'Trisha Thonupunoori', 'Daphni George', 'Rakshanda B', 'Nicole Herman'];
    const roles = ['President', 'Vice President', 'Treasurer', 'Marketing Officer', 'Communications Officer'];
    return <div className="flex space-x-6 overflow-x-auto pb-2">
        {[0, 1, 2, 3, 4].map((id) => (
            <div
            key={id}
            className="min-w-[230px]  rounded-lg flex-shrink-0 space-y-3"
            >
            <img src="/logos/logo2.png" className="w-50 h-50 object-contain">
            </img>

            <p className="text-[#0C2A64]"><b>{officers[id]}</b><br/> {roles[id]}</p>
            </div>
        ))}
    </div>
}

export default TeamDescriptions;
