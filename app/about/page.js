import React from 'react'

const page = () => {
  return (
    <div className="p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold mb-4">The Academy of Westerosi Arts and Warfare</h1>
      <p className="text-slate-500 mt-2">
        The Academy of Westerosi Arts and Warfare serves as a beacon of learning, training future leaders, warriors, 
        and scholars who will navigate the complex landscape of Westeros. With a focus on honor, strategy, and the 
        arts, the school prepares its students to take their place in the rich tapestry of the realm’s history, 
        whether as rulers, warriors, or wise advisors.
      </p>

      <h2 className="text-3xl font-semibold mt-6">Mission Statement</h2>
      <p className="text-slate-500 mt-2">
        The Academy of Westerosi Arts and Warfare aims to cultivate the next generation of leaders, strategists, 
        and scholars. Students will learn the arts of combat, diplomacy, history, and the intricate politics that 
        define the realm, fostering a sense of honor, loyalty, and service to their houses and the Seven Kingdoms.
      </p>
      
      <h2 className="text-3xl font-semibold mt-6">Curriculum</h2>
      <ul className="list-disc ml-6 mt-2 text-slate-500">
        <li>
          <strong>Combat Training:</strong> Mastering swordsmanship, archery, and horseback riding.
        </li>
        <li>
          <strong>Political Science and Diplomacy:</strong> Studying house alliances and negotiation tactics.
        </li>
        <li>
          <strong>History of Westeros:</strong> Key events, figures, and legends of the realm.
        </li>
        <li>
          <strong>Magic and Mysticism:</strong> Exploring the lore of the Old Gods and basic spellcasting.
        </li>
        <li>
          <strong>Culinary Arts:</strong> Preparing traditional Westerosi dishes for feasts and banquets.
        </li>
      </ul>

      <h2 className="text-3xl font-semibold mt-6">School Culture</h2>
      <ul className="list-disc ml-6 mt-2 text-slate-500">
        <li>
          <strong>House System:</strong> Students are sorted into houses based on qualities such as bravery and intellect.
        </li>
        <li>
          <strong>Festivals and Tournaments:</strong> Seasonal events including combat tournaments and feasts.
        </li>
        <li>
          <strong>Honor Code:</strong> A strict code emphasizing loyalty, respect, and defense of the realm.
        </li>
      </ul>

      <h2 className="text-3xl font-semibold mt-6">Extracurricular Activities</h2>
      <ul className="list-disc ml-6 mt-2 text-slate-500">
        <li>
          <strong>The Student Council of Lords and Ladies:</strong> A governing body for proposing and debating laws.
        </li>
        <li>
          <strong>The Dragon Riders Club:</strong> Training to ride and care for dragons.
        </li>
        <li>
          <strong>The Bard’s Guild:</strong> Fostering creativity through storytelling, music, and poetry.
        </li>
      </ul>

      <h2 className="text-3xl font-semibold mt-6">Notable Faculty</h2>
      <ul className="list-disc ml-6 mt-2 text-slate-500">
        <li><strong>Ser Jaime Lannister:</strong> Head of Combat Training.</li>
        <li><strong>Lady Olenna Tyrell:</strong> Master of political intrigue and diplomacy.</li>
        <li><strong>Maester Bran:</strong> Scholar responsible for history and mysticism.</li>
      </ul>
    </div>
  );
};


export default page
