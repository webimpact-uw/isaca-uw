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
    return res;
}

const TeamDescriptions = async () => {
    const staffData = await getData();

    return (
        <div className="flex flex-wrap justify-start mb-10">
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

function StaffCard ({name, position, photoUrl}) {
    return (
        <div
            className="min-w-[200px] rounded-lg space-y-3 mb-4 mr-4"
        >
            <img src={photoUrl} className="w-60 h-60 object-cover">
            </img>
            <p className="text-lg">
                <b>{name}</b>
                <br/>{position}
            </p>
        </div>
    )
}

export default TeamDescriptions;