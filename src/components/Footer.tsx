import { Text, Group } from "@mantine/core";
import type { FooterProps } from "../libs/Footer";
export default function Footer({ year, fullName, studentId }: FooterProps) {
  return (
    <Group p="md" justify="center">
      <Text>
        © CPE207-2025 {year} {fullName} {studentId}. All rights reserved.
      </Text>
    </Group>
  );
}
