import { api } from "@/lib/api";
import Card from "@/components/Card";

interface God {
  id: number;
  pantheonId: number;
  name: string;
  imageUrl: string;
  description: string;
}

export default async function Gods() {
  const response = await api.get("/gods", {
    params: {
      limit: 10,
      offset: 0,
    },
  });

  const gods: God[] = response.data;

  return (
    <div className="flex flex-wrap text-black justify-center">
      {gods.map((god) => (
        <Card
          key={god.id}
          image={god.imageUrl}
          title={god.name}
          description={god.description}
        />
      ))}
    </div>
  );
}
