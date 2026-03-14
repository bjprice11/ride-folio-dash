export interface Vehicle {
  id: string;
  year: number;
  make: string;
  model: string;
  vin: string;
  odometer: number;
  status: "active" | "service-due" | "in-shop" | "storage";
  lastService: string;
  imageType: "sedan" | "coupe" | "suv" | "truck";
}

export interface MaintenanceRecord {
  id: string;
  vehicleId: string;
  vehicleName: string;
  type: string;
  description: string;
  date: string;
  cost: number;
  odometer: number;
  status: "completed" | "scheduled" | "overdue";
}

export interface Expense {
  id: string;
  vehicleId: string;
  vehicleName: string;
  category: "maintenance" | "fuel" | "insurance" | "parts" | "registration" | "other";
  description: string;
  amount: number;
  date: string;
}

export const mockVehicles: Vehicle[] = [
  { id: "1", year: 2022, make: "Porsche", model: "911 Carrera S", vin: "WP0AB2A99NS230451", odometer: 12381, status: "active", lastService: "2026-02-28", imageType: "coupe" },
  { id: "2", year: 2021, make: "BMW", model: "M3 Competition", vin: "WBS43AY09NFJ12984", odometer: 28750, status: "service-due", lastService: "2025-12-15", imageType: "sedan" },
  { id: "3", year: 2023, make: "Ford", model: "Bronco Raptor", vin: "1FMEE5DP3PLA09821", odometer: 8420, status: "active", lastService: "2026-03-01", imageType: "suv" },
  { id: "4", year: 2020, make: "Chevrolet", model: "Corvette C8", vin: "1G1YB3D41L5108294", odometer: 42100, status: "in-shop", lastService: "2026-01-20", imageType: "coupe" },
  { id: "5", year: 2024, make: "Toyota", model: "GR Supra", vin: "WVWAA71K58W201030", odometer: 3200, status: "storage", lastService: "2026-03-10", imageType: "coupe" },
  { id: "6", year: 2019, make: "Mercedes-AMG", model: "GT 63 S", vin: "WDDYJ7JA5KA008421", odometer: 51200, status: "active", lastService: "2026-02-10", imageType: "sedan" },
];

export const mockMaintenance: MaintenanceRecord[] = [
  { id: "m1", vehicleId: "1", vehicleName: "Porsche 911 Carrera S", type: "Oil Change", description: "Full synthetic 0W-40 with filter", date: "2026-02-28", cost: 285, odometer: 12381, status: "completed" },
  { id: "m2", vehicleId: "2", vehicleName: "BMW M3 Competition", type: "Brake Service", description: "Front brake pads and rotors", date: "2026-03-20", cost: 1200, odometer: 29000, status: "scheduled" },
  { id: "m3", vehicleId: "4", vehicleName: "Chevrolet Corvette C8", type: "Transmission Service", description: "DCT fluid change and filter", date: "2026-03-12", cost: 650, odometer: 42100, status: "overdue" },
  { id: "m4", vehicleId: "2", vehicleName: "BMW M3 Competition", type: "Oil Change", description: "Full synthetic 0W-30", date: "2025-12-15", cost: 195, odometer: 27500, status: "completed" },
  { id: "m5", vehicleId: "3", vehicleName: "Ford Bronco Raptor", type: "Tire Rotation", description: "All-terrain tire rotation and balance", date: "2026-03-01", cost: 120, odometer: 8420, status: "completed" },
  { id: "m6", vehicleId: "1", vehicleName: "Porsche 911 Carrera S", type: "Alignment", description: "4-wheel alignment after new tires", date: "2026-01-15", cost: 180, odometer: 11800, status: "completed" },
  { id: "m7", vehicleId: "6", vehicleName: "Mercedes-AMG GT 63 S", type: "Spark Plugs", description: "Replace all 8 spark plugs", date: "2026-04-01", cost: 480, odometer: 52000, status: "scheduled" },
];

export const mockExpenses: Expense[] = [
  { id: "e1", vehicleId: "1", vehicleName: "Porsche 911 Carrera S", category: "maintenance", description: "Oil Change", amount: 285, date: "2026-02-28" },
  { id: "e2", vehicleId: "2", vehicleName: "BMW M3 Competition", category: "fuel", description: "Premium Unleaded", amount: 92, date: "2026-03-10" },
  { id: "e3", vehicleId: "4", vehicleName: "Chevrolet Corvette C8", category: "parts", description: "Performance air filter", amount: 145, date: "2026-03-05" },
  { id: "e4", vehicleId: "3", vehicleName: "Ford Bronco Raptor", category: "insurance", description: "Monthly premium", amount: 220, date: "2026-03-01" },
  { id: "e5", vehicleId: "1", vehicleName: "Porsche 911 Carrera S", category: "registration", description: "Annual registration renewal", amount: 385, date: "2026-01-10" },
  { id: "e6", vehicleId: "6", vehicleName: "Mercedes-AMG GT 63 S", category: "fuel", description: "Premium Unleaded", amount: 115, date: "2026-03-08" },
  { id: "e7", vehicleId: "2", vehicleName: "BMW M3 Competition", category: "maintenance", description: "Oil Change", amount: 195, date: "2025-12-15" },
  { id: "e8", vehicleId: "3", vehicleName: "Ford Bronco Raptor", category: "maintenance", description: "Tire Rotation", amount: 120, date: "2026-03-01" },
  { id: "e9", vehicleId: "1", vehicleName: "Porsche 911 Carrera S", category: "maintenance", description: "Alignment", amount: 180, date: "2026-01-15" },
  { id: "e10", vehicleId: "4", vehicleName: "Chevrolet Corvette C8", category: "fuel", description: "Premium Unleaded", amount: 88, date: "2026-03-02" },
];
