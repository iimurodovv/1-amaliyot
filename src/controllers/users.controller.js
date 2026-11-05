import { getData, setData } from "../helpers/fileData.js";
import { sendEmailMessage } from "../helpers/emailer.js";

class UserController {
    async getAll(req, res) {
        try {
            const users = await getData("users.json");

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
            const users = await getData("users.json");
            const user = users.find((el) => el.id === Number(req.params.id));

            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: `Bunday id li user toplimadi`,
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
            const users = await getData("users.json");

            const { email, name } = req.body;

            const newUser = {
                ...req.body,
                id: users.length ? users.at(-1).id + 1 : 1,
            };

            await sendEmailMessage(email, name);

            users.push(newUser);

            await setData("users.json", users);

            return res.status(201).json({
                success: true,
                message: "muvaffaqiyatli qo'shildi",
                user: newUser,
            });
        } catch (err) {
            console.log(`Createda xatolik: ${err.message}`);
            return res
                .status(500)
                .json({ success: false, message: "Serverda xatolik" });
        }
    }
    async update(req, res) {
        try {
            const users = await getData("users.json");
            const id = Number(req.params.id);
            const index = users.findIndex((el) => el.id === id);

            if (index !== -1) {
                users[index] = {
                    id,
                    ...req.body,
                };
                await setData("users.json", users);
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
            const users = await getData("users.json");
            const id = Number(req.params.id);
            const index = users.findIndex((el) => el.id === id);

            if (index !== -1) {
                users.splice(index, 1);
                await setData("users.json", users);
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

export default new UserController();
