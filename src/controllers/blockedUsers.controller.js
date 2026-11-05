import { getData, setData } from "../helpers/fileData.js";

class BlockedUsersController {
    async getAll(req, res) {
        try {
            const users = await getData("blockedUsers.json");

            if (!users) {
                return res.status(404).json({
                    success: false,
                    message: "Topilmadi",
                });
            }

            res.status(200).json({
                success: true,
                data: users,
            });
        } catch (err) {
            return res.status(500).json({
                success: false,
                message: `getAll da xatolik bor ${err.message}`,
            });
        }
    }
    async getId(req, res) {
        try {
            const users = await getData("blockedUsers.json");
            const user = users.find((el) => el.id === Number(req.params.id));

            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: `Bunday id li blocked user topilmadi`,
                });
            }

            res.status(200).json({
                success: true,
                data: user,
            });
        } catch (err) {
            return res.status(500).json({
                success: false,
                message: `getID da xatolik bor ${err.message}`,
            });
        }
    }
    async create(req, res) {
        try {
            const users = await getData("blockedUsers.json");

            const id = users.length > 0 ? users.at(-1).id + 1 : 1;

            const newUser = {
                id: id,
                ...req.body,
            };

            users.push(newUser);
            await setData("blockedUsers.json", users);

            res.status(200).json({
                success: true,
                data: users,
            });
        } catch (err) {
            return res.status(500).json({
                success: false,
                message: `Create da xatolik bor ${err.message}`,
            });
        }
    }
    async update(req, res) {
        try {
            const users = await getData("blockedUsers.json");
            const id = Number(req.params.id);
            const index = users.findIndex((el) => el.id === id);

            if (index !== -1) {
                users[index] = {
                    id,
                    ...req.body,
                };
                await setData("blockedUsers.json", users);
            }

            res.status(200).json({
                success: true,
                data: users[index],
            });
        } catch (err) {
            return res.status(500).json({
                success: false,
                message: `Update da xatolik bor ${err.message}`,
            });
        }
    }
    async delete(req, res) {
        try {
            const users = await getData("blockedUsers.json");
            const id = Number(req.params.id);
            const index = users.findIndex((el) => el.id === id);

            if (index !== -1) {
                users.splice(index, 1);
                await setData("blockedUsers.json", users);
            }

            res.status(200).json({
                success: true,
                data: users,
            });
        } catch (err) {
            return res.status(500).json({
                success: false,
                message: `Delete da xatolik bor ${err.message}`,
            });
        }
    }
}

export default new BlockedUsersController();
