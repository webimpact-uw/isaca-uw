import { client } from '../../../sanity/lib/client';

async function getData() {
    const query = `*[_type == "staff"] | order(_createdAt asc) {
        staffPhoto {
            asset -> {
                url
            }
        },
        staffName,
        staffPosition,
    }`;

    const res = await client.fetch(query);
    console.log(res);
    return res;
}

const TeamDescriptions = async () => {
    const staffData = await getData();

    return (
        <div className="flex flex-wrap pb-2 justify-center mb-10">
            {staffData.map((staff, index) => (
                <StaffCard
                    key={index}
                    name={staff.staffName}
                    position={staff.staffPosition}
                    photoUrl={staff.staffPhoto.asset.url}
                />
            ))}
        </div>
    )
}

function StaffCard (key, name, position, photoUrl) {
    return (
        <div
            key={key}
            className="min-w-[230px] rounded-lg flex-shrink-0 space-y-3 pb-4"
        >
            <img src={photoUrl} className="w-50 h-50 object-contain">
            </img>
            <p className="text-lg"><b>{name}</b><br/>{position}</p>
        </div>
    )
}

export default TeamDescriptions;